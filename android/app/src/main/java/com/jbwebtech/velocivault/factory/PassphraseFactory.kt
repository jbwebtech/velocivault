package com.jbwebtech.velocivault.factory

import com.jbwebtech.velocivault.model.Passphrase
import java.time.LocalDateTime
import java.util.UUID

sealed class PassphraseFactory {
    companion object {
        fun create(username: String, passphrase: String): Passphrase {
            return Passphrase(
                UUID.randomUUID(),
                username,
                passphrase,
                null,
                null,
                null,
                LocalDateTime.now(),
                false
            )
        }
    }
}