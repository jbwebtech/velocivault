package com.velocivault.lib.provider

import com.velocivault.lib.model.Word
import com.velocivault.lib.model.WordType

interface RandomWordProvider {
    fun getWord(): Word
    fun getWord(type: WordType): Word
}