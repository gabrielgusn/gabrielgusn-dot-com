from rembg import remove
from PIL import Image
import io

def strip_bg(input_path, output_path):
    # Load image
    with open(input_path, 'rb') as i:
        input_data = i.read()
    
    # Remove background
    # This uses the default u2net model
    output_data = remove(input_data)
    
    # Save output
    with open(output_path, 'wb') as o:
        o.write(output_data)

if __name__ == "__main__":
    strip_bg('input.jpg', 'output.png')
