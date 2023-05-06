def parseHtml(String):
	Parse = []
	Stack = []
	Item = 1
	for i, c in enumerate(String):
		if c == '<':
			if String[i+1] != "/":
				Stack.append(i)
		elif c == '>' and Stack:
			start = Stack.pop()
			data = String[start + 1: i].split(' ')
			for j in range(len(data)):
				if j == 0:
					Parse.append(f"let Var{Item} = document.createElement('{data[j]}')")
				else:
					try:
						property = data[j]
					except: property = "/"
					print(property)
					if property == "/": pass
					else:
						k = j+1
						while property.count('"') < 2:
							try: property += data[k]
							except: property += '"'
							try: data[j] = property
							except: pass
							try: data.pop(k)
							except: pass
							k += 1
						Parse.append(f'Var{Item}.{property}')
			Item += 1
	return Parse

String = open("./Proyecto 1/index.html","r", encoding="utf-8").read()
String = """<head>
	<meta charset="utf-8">
	<title> 3.2 &mdash; blender.org</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./style.css" type="text/css" media="screen" />
	<link rel="stylesheet" id="wp-block-library-css" href="./style blocks.css" blocks.css type=text/css media="all" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
	<script src="./index.js"></script>
</head>"""

with open("Parsed.js", "w") as File:
	for Line in parseHtml(String):
		File.write(Line+"\n")