package com.jbwebtech.velocivault.dao

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update
import com.jbwebtech.velocivault.model.Passphrase

@Dao
interface PassphraseDao {
    @Query("SELECT * FROM passphrase")
    fun getAll(): List<Passphrase>

    @Query("SELECT * FROM passphrase WHERE id IN (:ids)")
    fun findByIds(ids: IntArray): List<Passphrase>

    @Query("SELECT * FROM passphrase WHERE username = (:username) LIMIT 1")
    fun findByUsername(username:String): Passphrase

    @Update
    fun update(passphrase: Passphrase): Passphrase

    @Insert
    fun create(passphrase: Passphrase): Passphrase

    @Delete
    fun delete(passphrase: Passphrase)
}