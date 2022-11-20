
def getScoresFromInput(input):
    u= "up"
    d="down"
    l="left"
    r="right"
    print("this is the input",input)
    
    if input == "":
        return "I couldn't quite catch that, try again"
    arr = input.split(" ")
    answer = [r,d,r,u,r,u,r,l,d,u,r,d,l,u,d,l,d,l,u,r,l,l,d,d,d,r,u,r,d,u,r,d,u,r,d,r,d,u,l,r,d,u,r]
    answerIndex = 0
    score = 0
    started = True
    i = 0
    while i < len(arr):
        if arr[i].lower() == "start":
            i = i+1 if i < len(arr)-1 else i
            started = True
        if started:
            print(arr[i], answer[answerIndex])
            if arr[i] in [r,u,l,d] or arr[i] == "skip":
                if arr[i] == answer[answerIndex]:
                    score += 1
                answerIndex += 1
            i += 1
    if score <= 1:
        return "20/200"
    elif score <= 3:
        return "20/100"
    elif score <= 6:
        return "20/80"    
    elif score <= 10:
        return "20/63"    
    elif score <= 15:
        return "20/50"    
    elif score <= 20:
        return "20/40"    
    elif score <= 27:
        return "20/32"    
    elif score <= 35:
        return "20/25"    
    else:
        return "20/20"    
    
        