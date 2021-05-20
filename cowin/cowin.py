#!/usr/bin/python3

import requests
import urllib
from datetime import datetime
from datetime import timedelta

import json


def checkDistrict(district):
    print("hello")


def check(code, districtName,  mode, date):
    datestr = date.strftime('%d-%m-%Y')
    humanDate = date.strftime('%d %b %Y')
    if(mode == "PIN"):
        URL = f"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode={code}&date={datestr}"
    if(mode == "DISTRICT"):
        URL = f"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id={code}&date={datestr}"
    print(URL)
    res = requests.request("GET", URL).text
    res = json.loads(res)
    availabile_slots = []
    for center in res["centers"]:
        for session in center["sessions"]:
            if(session["available_capacity"] > 0):
                sessionDate = datetime.strptime(
                    session['date'], '%d-%m-%Y').strftime('%d %b %Y')
                availabile_slots.append(
                    f" {sessionDate} : {center['name']} : {session['min_age_limit']}+")
    print(availabile_slots)
    output = ""
    if(len(availabile_slots) > 0):

        if(mode == "PIN"):
            output += f"<b>Slots Available</b>\n<b>PIN :: {code}</b>\n"
        if(mode == "DISTRICT"):
            output += f"<b>Slots Available</b>\n<b>DISTRICT :: {districtName}</b>\n"

        output += "\n".join(sorted(availabile_slots))
    print(output)
    sendMessage(output)


def sendMessage(message):
    if(message):
        response = requests.get('https://api.telegram.org/bot1622304425:AAGWE-W9aLuwAMC_0Rmuhr0kX3Vi1TJfPmE/sendMessage',
                                params={"chat_id": "-1001353431204", "text": message, "parse_mode": "HTML"})
        print(response.text)


def sendMessagePlain(message):
    if(message):
        response = requests.get('https://api.telegram.org/bot1622304425:AAGWE-W9aLuwAMC_0Rmuhr0kX3Vi1TJfPmE/sendMessage',
                                params={"chat_id": "-1001353431204", "text": message})
        print(response.text)


try:
    TODAY = datetime.strptime('10-05-2021', '%d-%m-%Y')
    check("401107",  "", "PIN", TODAY)
    check("401107",  "", "PIN", TODAY+timedelta(days=7))
    check("401107",  "", "PIN", TODAY+timedelta(days=14))
    check("401107",  "", "PIN", TODAY+timedelta(days=21))
    check("400068",  "", "PIN", TODAY)
    check("400068",  "", "PIN", TODAY+timedelta(days=7))
    check("400068",  "", "PIN", TODAY+timedelta(days=14))
    check("400068",  "", "PIN", TODAY+timedelta(days=21))
    check("401202",  "", "PIN", TODAY)
    check("401202",  "", "PIN", TODAY+timedelta(days=7))
    check("401202",  "", "PIN", TODAY+timedelta(days=14))
    check("401202",  "", "PIN", TODAY+timedelta(days=21))
    check("395",  "Mumbai", "DISTRICT", TODAY)
    check("395",  "Mumbai", "DISTRICT", TODAY+timedelta(days=7))
    check("395",  "Mumbai", "DISTRICT", TODAY+timedelta(days=14))
    check("395",  "Mumbai", "DISTRICT", TODAY+timedelta(days=21))
except Exception as e:
    print(e)
    sendMessagePlain(str(e))
