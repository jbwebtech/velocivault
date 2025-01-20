plugins {
    alias(libs.plugins.javaLibrary)
    alias(libs.plugins.jetbrainsKotlinJvm)
}

buildscript {
    dependencies {
        classpath(libs.kotlin.gradle.plugin)
    }
}

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

dependencies {
    implementation(libs.fuel)
    implementation(libs.fuel.gson)
    implementation(libs.gson)

    testImplementation(libs.junit)
}
