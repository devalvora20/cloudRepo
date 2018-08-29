package swabhav.techlabs.com.bindingapp;

import android.databinding.DataBindingUtil;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.widget.EditText;

import swabhav.techlabs.com.bindingapp.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {
    ActivityMainBinding binding;
    User user;
    EditText editTextName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
//        editTextName=findViewById(R.id.editTextName);
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main);
        user = new User();
        user.setName("Hello");
        binding.setUser(user);

    }
}
