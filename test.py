#######################
#	
# 	Usage
#
# 	python test.py --image "test.jpg"

import argparse

def main(image=None):
	# load image
	# get colors using rewritten Palette Extractor Code
	# display colors
	return None
if __name__ == '__main__':
	parser = argparse.ArgumentParser(description='Palette Extraction Tool.')
	parser.add_argument("--image", default=None, type=str, help="Local image filename.")
	args = parser.parse_args()

	main(args.image)
