package com.jbwebtech.velocivault.vendor.apiNinjas.randomword

import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.core.Parameters
import com.github.kittinunf.fuel.gson.responseObject
import com.jbwebtech.velocivault.model.Word
import com.jbwebtech.velocivault.providers.RandomWordProvider
import com.jbwebtech.velocivault.vendor.apiNinjas.ApiNinjasConstants


/**
 * Source: https://api-ninjas.com/api/randomword
 */
class ApiNinjasRandomWordRemoteApiProvider : RandomWordProvider {

    private val url = "${ApiNinjasConstants().apiRoot}/v1/randomword"
    private val headers: Map<String, Any> = getHeaders()

    override fun getWord(): Word {
        val parameters: Parameters = emptyList()
        return callRemoteApi(parameters)
    }

    override fun getWord(type: Word.Type): Word {
        val parameters: Parameters = listOf("type" to type)
        return callRemoteApi(parameters)
    }

    private fun callRemoteApi(parameters: Parameters): Word {
        val (_, _, result) = Fuel.get(url, parameters).header(headers).responseObject<Word>()

        return when (result) {
            is com.github.kittinunf.result.Result.Success -> Word(result.get().word)
            is com.github.kittinunf.result.Result.Failure -> throw RuntimeException("Failed to fetch random word: " + result.error)
        }
    }

    private fun getHeaders(): Map<String, Any> {
        return mapOf("X-Api-Key" to ApiNinjasConstants().apiKey)
    }
}