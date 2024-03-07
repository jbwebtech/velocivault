package com.jbwebtech.velocivault.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.time.LocalDateTime
import java.util.UUID

@Entity
data class Passphrase(
    @PrimaryKey val id: Int,
    @ColumnInfo(name = "username") val username: String,
    @ColumnInfo(name = "passphrase") val passphrase: String,
    @ColumnInfo(name = "created") val created: LocalDateTime,
    @ColumnInfo(name = "retired") val retired: Boolean
)
