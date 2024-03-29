import java.util.Properties

plugins {
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.jetbrainsKotlinAndroid)
}

android {

    android.buildFeatures.buildConfig = true

    namespace = "com.jbwebtech.velocivault"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.jbwebtech.velocivault"
        minSdk = 28
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"

        // Load properties
        var apiKey = "YOUR_API_KEY"
        try {
            val keystoreFile = project.rootProject.file("secrets.properties")
            val properties = Properties()
            properties.load(keystoreFile.inputStream())
            val p = properties.getProperty("api_key")
            if (null != p) {
                apiKey = p
            }
        } catch (ignored: Exception) {
            throw RuntimeException("Must add a secrets.properties file to set the API_KEY")
        }

        // Add API_KEY to BuildConfig
        buildConfigField("String", "API_KEY", "\"" + apiKey + "\"")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
        debug {
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        viewBinding = true
    }
    buildToolsVersion = "34.0.0"
}

dependencies {

    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.material)
    implementation(libs.androidx.constraintlayout)
    implementation(libs.androidx.navigation.fragment.ktx)
    implementation(libs.androidx.navigation.ui.ktx)


    implementation(libs.androidx.room.runtime)
    annotationProcessor(libs.androidx.room.compiler)

    
    implementation(libs.fuel)
    implementation(libs.fuel.gson)
    implementation(libs.gson)

    testImplementation(libs.junit)

    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
}