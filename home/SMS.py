import requests
# الطالب قادم الى المنزل
# الطالب غادر المدرسة
# WnM8Twa14N4{% if=='Student.Trsnsport==Done!'%}7CfVFqgzKbRIn0Vt5dER7rnpRyTy
# الطالب وصل المنزل/ الطالب وصل المدرسة

def Send_SMS(text , name  ):
    url = 'https://app.mobile.net.sa/api/v1/send'
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer yHgwWdENWljQq51pOAqn53RDAXC7NKU7zdOFc6kp'
    }
    headline = f"{name}  " \
                           f"Test Sending Masseges  -  Character Set Transformation Format – 8-bit"\
                           f"التخرج مشروع تجربة "\
                         
                          
    data = {
    'number': text,
    'senderName': 'Mobile.SA',
    'sendAtOption': 'Now',
    'messageBody': headline
}
    response = requests.post(url, headers=headers, json=data)
    print('Status:', response.status_code)
    print('Headers:', response.headers)
    print('Body:', response.text)