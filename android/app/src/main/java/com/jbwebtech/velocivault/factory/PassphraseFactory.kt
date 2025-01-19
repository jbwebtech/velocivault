package com.jbwebtech.velocivault.factory

import com.jbwebtech.velocivault.Passphrase
import java.time.LocalDateTime
import kotlin.random.Random

@Suppress("unused")
class PassphraseFactory {
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