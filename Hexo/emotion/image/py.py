import glob
imagelist= sorted(glob.glob('*.png'))
print(imagelist)
for i in imagelist:
    i = i.replace(".png","")
    print('''{
    "icon": "'''+i+'''",
    "text": "表情"
        },''')