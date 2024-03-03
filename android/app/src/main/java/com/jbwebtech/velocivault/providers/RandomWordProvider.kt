package com.jbwebtech.velocivault.providers

import com.jbwebtech.velocivault.model.Word

interface RandomWordProvider {
    fun getWord(): Word
    fun getWord(type: Word.Type): Word
}