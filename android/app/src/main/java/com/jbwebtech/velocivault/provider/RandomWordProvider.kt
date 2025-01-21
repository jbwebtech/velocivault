package com.jbwebtech.velocivault.provider

import com.jbwebtech.velocivault.model.Word
import com.jbwebtech.velocivault.model.WordType

interface RandomWordProvider {
    fun getWord(): Word
    fun getWord(type: WordType): Word
}