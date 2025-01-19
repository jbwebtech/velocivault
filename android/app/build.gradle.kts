import java.util.Properties

plugins {
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.jetbrainsKotlinAndroid)
}

android {

    android.buildFeatures.buildConfig = true

    namespace = "com.jbwebtech.velocivault"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.jbwebtech.velocivault"
        minSdk = 28
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"

        // Load properties
        val apiKey: String = project.findProperty("apiNinjasApiKey") as String?
            ?: throw RuntimeException("Please set `apiNinjasApiKey=YOUR_API_KEY` to ~/.gradle/gradle.properties")

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
    buildToolsVersion = "35.0.0"
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