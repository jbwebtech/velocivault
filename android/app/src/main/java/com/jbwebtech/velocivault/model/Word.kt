package com.jbwebtech.velocivault.model

import com.google.gson.annotations.SerializedName

data class Word(@SerializedName("word") val word: String) {
    enum class Type {
        UNKNOWN, ADJECTIVE, ADVERB, NOUN, VERB
    }
}
