package com.jbwebtech.velocivault.model

import java.time.LocalDateTime
import java.util.UUID

data class Passphrase(
    val id: UUID,
    val username: String,
    val passphrase: String,
    val email: String?,
    val label: String?,
    val description: String?,
    val created: LocalDateTime,
    val retired: Boolean
)
