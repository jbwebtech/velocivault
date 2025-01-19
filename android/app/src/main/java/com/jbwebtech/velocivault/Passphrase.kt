package com.jbwebtech.velocivault

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.time.LocalDateTime

@Entity
data class Passphrase(
    @PrimaryKey val id: Int,
    @ColumnInfo(name = "username") val username: String,
    @ColumnInfo(name = "passphrase") val passphrase: String,
    @ColumnInfo(name = "created") val created: LocalDateTime,
    @ColumnInfo(name = "retired") val retired: Boolean
)
