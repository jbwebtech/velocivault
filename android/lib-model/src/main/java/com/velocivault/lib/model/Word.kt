package com.velocivault.lib.model

import com.google.gson.annotations.SerializedName

@Suppress("unused")
data class Word(@SerializedName("word") private val words: List<String>, private val type: WordType) {

    fun getType(): WordType {
        return type
    }

    fun getWords(): List<String> {
        return words
    }

    fun getFirst(): String {
        return if (words.isEmpty()) "" else words[0]
    }

}