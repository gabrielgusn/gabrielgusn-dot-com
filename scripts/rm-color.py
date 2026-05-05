import cv2
import numpy as np

def remove_color(input_path, output_path, lower_bound, upper_bound):
    # Load image with OpenCV
    img = cv2.imread(input_path)
    
    # Convert BGR (OpenCV default) to HSV
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    # Create a mask: pixels inside range are white (255), outside are black (0)
    mask = cv2.inRange(hsv, lower_bound, upper_bound)

    # Invert mask: we want to KEEP what is NOT the color
    mask_inv = cv2.bitwise_not(mask)

    # Split channels and apply the mask as the Alpha (transparency) channel
    b, g, r = cv2.split(img)
    rgba = [b, g, r, mask_inv]
    result = cv2.merge(rgba)

    # Save as PNG to preserve transparency
    cv2.imwrite(output_path, result)

# Example: Removing a specific shade of Green
# HSV Green range: Hue is approx 35-85
lower_green = np.array([35, 40, 40])
upper_green = np.array([85, 255, 255])

remove_color('input.jpg', 'output.png', lower_green, upper_green)
