package com.jbwebtech.velocivault.providers

import java.io.FileReader
import java.util.Properties

sealed class PropertiesProvider {
    companion object {
        fun getProperty(key: String): String {
            return Properties().apply {
                load(FileReader("local.properties"))
            }.getProperty(key) ?: ""
        }
    }
}