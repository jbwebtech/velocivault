package com.jbwebtech.velocivault.vendor.apiNinjas

import com.jbwebtech.velocivault.BuildConfig

data class ApiNinjasConstants(
    val apiRoot: String = "https://api.api-ninjas.com",
    val apiKey: String = BuildConfig.API_KEY
)
