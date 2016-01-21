"""
This script is used to automatically change the "last_updated.txt" file so that
my website can properly display the date at which it was last updated.
"""

from datetime import datetime

last_updated = datetime.now()
last_updated_str = last_updated.strftime("%B %-d, %Y\n")

last_updated_file = open("last_updated", mode='w')
last_updated_file.write(last_updated_str)
last_updated_file.close()
