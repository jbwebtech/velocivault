package com.jbwebtech.velocivault.providers

import com.jbwebtech.velocivault.model.Word
import com.jbwebtech.velocivault.model.enum.WordType

interface RandomWordProvider {
    fun getWord(): Word
    fun getWord(type: WordType): Word
}