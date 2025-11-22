import time
wait_time=1
max_retry=5
attemots=0

while attemots<max_retry:
    print("attempt",attemots+1,"-waitime",wait_time)
    time.sleep(wait_time)
    wait_time*=2
    attemots+=1
    
