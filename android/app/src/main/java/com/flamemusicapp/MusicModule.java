package com.flamemusicapp;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;
import java.util.Map;
import java.util.HashMap;

import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.util.Log;

public class MusicModule extends ReactContextBaseJavaModule {
    MusicModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "MusicModule";
    }

    @ReactMethod
    public void playSong() {
        String url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"; // your URL here
        MediaPlayer mediaPlayer = new MediaPlayer();
        mediaPlayer.setAudioAttributes(
                new AudioAttributes.Builder()
                        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                        .setUsage(AudioAttributes.USAGE_MEDIA)
                        .build()
        );

        try {
            mediaPlayer.setDataSource(url);
            mediaPlayer.prepare(); // might take long! (for buffering, etc)
        } catch (IOException e) {
            e.printStackTrace();
        }
        mediaPlayer.start();

        Log.d("CalendarModule", "Playing song ");
    }
}
