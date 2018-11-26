class Cell:
    cellValue=""
    def getValue(self):
        return self.cellValue
    
    def setValue(self,value):
        try:
            if(self.cellValue==""):
                self.cellValue=value
                return "true"
            else:
                raise Exception('cell already marked')
        except Exception:
            print("Cell already marked")
            return "false"