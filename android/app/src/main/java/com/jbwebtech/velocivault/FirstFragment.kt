package com.jbwebtech.velocivault

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.jbwebtech.velocivault.databinding.FragmentFirstBinding
import com.jbwebtech.velocivault.model.Word
import com.jbwebtech.velocivault.model.WordType
import com.jbwebtech.velocivault.provider.RandomWordProvider
import com.jbwebtech.velocivault.vendor.apiNinjas.randomword.ApiNinjasRandomWordRemoteApiProvider
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlin.random.Random

/**
 * A simple [Fragment] subclass as the default destination in the navigation.
 */
class FirstFragment : Fragment() {
    private companion object {
        private val TAG: String = FirstFragment::class.simpleName ?: "N/A"
        private const val NUM_PASSPHRASES = 1
    }

    private var _binding: FragmentFirstBinding? = null

    // This property is only valid between onCreateView and onDestroyView.
    //TODO: switching views too quickly can throw a NullPointerException from onViewCreated
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentFirstBinding.inflate(inflater, container, false)
        return binding.root
    }

    @OptIn(DelicateCoroutinesApi::class)
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.buttonFirst.setOnClickListener {
            findNavController().navigate(R.id.action_FirstFragment_to_SecondFragment)
        }

        val randomWordProvider: RandomWordProvider = ApiNinjasRandomWordRemoteApiProvider()

        GlobalScope.launch(Dispatchers.IO) {
            // Perform network request on IO thread
            try {

                val phrases: MutableList<String> = mutableListOf<String>()

                for (i in 1..NUM_PASSPHRASES) {
                    var phrase = ""
                    val noun: Word = randomWordProvider.getWord(WordType.NOUN)
                    val verb: Word = randomWordProvider.getWord(WordType.VERB)
                    val adverb: Word = randomWordProvider.getWord(WordType.ADVERB)
                    val adjective: Word = randomWordProvider.getWord(WordType.ADJECTIVE)

                    if (adjective.getFirst().isNotEmpty()) {
                        phrase += adjective.getFirst().replaceFirstChar { c -> c.uppercase() }
                    }

                    if (noun.getFirst().isNotEmpty()) {
                        phrase += noun.getFirst().replaceFirstChar { c -> c.uppercase() }
                    }

                    if (verb.getFirst().isNotEmpty()) {
                        phrase += verb.getFirst().replaceFirstChar { c -> c.uppercase() }
                    }

                    if (adverb.getFirst().isNotEmpty()) {
                        phrase += adverb.getFirst().replaceFirstChar { c -> c.uppercase() }
                    }

                    for (a in 1..5) {
                        phrase += Random.nextInt(0, 10)
                    }

                    for (b in 1..5) {
                        phrase += "!@#$%^&*()-_+=<>?/[]{}|".random()
                    }

                    if (phrase.isNotEmpty()) {
                        phrases.add(phrase)
                    }
                }

                if (phrases.isNotEmpty()) {

                    // Switch to the main UI thread to update the UI
                    withContext(Dispatchers.Main) {
                        binding.textviewFirst.text = phrases.joinToString("\n")
                    }
                } else {
                    Log.i(
                        TAG,
                        "onViewCreated: RandomWordRemoteApiProvider returned an empty Word result"
                    )
                }
            } catch (e: Exception) {
                Log.e(TAG, "onViewCreated: " + e.localizedMessage, e)
//                e.printStackTrace()
                // Handle errors as needed
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}