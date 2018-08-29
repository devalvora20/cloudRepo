package swabhav.techlabs.com.bindingapp;

import android.databinding.BaseObservable;
import android.databinding.Bindable;

public class User extends BaseObservable{

    private String name;
    @Bindable
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
        notifyPropertyChanged(BR.name);
    }



}
