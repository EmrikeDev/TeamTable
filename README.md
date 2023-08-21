# TeamTable - Show your team on website.

**TeamTable is a tool created by Javascript and CSS, it can show your team like this:**

![Show](https://img1.imgtp.com/2023/08/21/HL4zccvM.jpg)

## Tutorial

### 1. Set data.js

This is a example:

	const data = [
		{
			"id": "1",
			"uid": "5970160",
			"name": "小潮院长",
			"info": "至高无上的老板",
			"face": "9YRtpBeL"
		},
		{
			"id": "2",
			"uid": "178029850",
			"name": "杜海皇",
			"info": "团队元老级成员兼行政部",
			"face": "e53S1QDw"
		}]
    //You can add more.

### 2. Set HTML

    <div id="personContainer"></div>
    <script src="./data.js"></script>
    <script src="./script.js"></script>
