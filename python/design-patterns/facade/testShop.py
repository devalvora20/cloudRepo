from mobileShop import MobileShop
class ShopTest:
    choice=0
    while(choice!=4):
        print("========== Mobile Shop ============")  
        print("           1. Iphone              ")  
        print("           2. Samsung              ")  
        print("           3. Windows            ")  
        print("           4. Exit.                     ")  
        choice=int(input("Enter your choice: \n"))
        shop=MobileShop()  
        if(choice==1):
            shop.iphoneSale()  
        elif(choice==2):
            shop.samsungSale()        
        elif(choice==3):
            shop.windowsSale()       
        else:
            print("exited")  