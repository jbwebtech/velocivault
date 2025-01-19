package com.jbwebtech.velocivault.factory

import com.jbwebtech.velocivault.Passphrase
import java.time.LocalDateTime
import kotlin.random.Random

sealed class PassphraseFactory {
    companion object {
        fun create(username: String, passphrase: String): Passphrase {
            return Passphrase(
                Random.nextInt(),
                username,
                passphrase,
                LocalDateTime.now(),
                false
            )
        }
    }
}