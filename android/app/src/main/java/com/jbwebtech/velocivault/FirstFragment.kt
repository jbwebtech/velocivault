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
import com.jbwebtech.velocivault.providers.RandomWordProvider
import com.jbwebtech.velocivault.vendor.apiNinjas.randomword.ApiNinjasRandomWordRemoteApiProvider
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

/**
 * A simple [Fragment] subclass as the default destination in the navigation.
 */
class FirstFragment : Fragment() {

    companion object {
        private val TAG: String = FirstFragment::class.simpleName ?: "N/A"
    }

    private var _binding: FragmentFirstBinding? = null

    // This property is only valid between onCreateView and onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {

        _binding = FragmentFirstBinding.inflate(inflater, container, false)
        return binding.root

    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.buttonFirst.setOnClickListener {
            findNavController().navigate(R.id.action_FirstFragment_to_SecondFragment)
        }


        val randomWordProvider: RandomWordProvider = ApiNinjasRandomWordRemoteApiProvider()

        GlobalScope.launch(Dispatchers.IO) {
            try {
                // Perform network request on IO thread
                val result: Word = randomWordProvider.getWord()
                if (result.word.isNotEmpty()) {
                    // Switch to the main UI thread to update the UI
                    withContext(Dispatchers.Main) {
                        binding.textviewFirst.text = result.word
                    }
                } else {
                    Log.i(
                        TAG,
                        "onViewCreated: RandomWordRemoteApiProvider returned an empty Word result"
                    )
                }
            } catch (e: Exception) {
                e.printStackTrace()
                // Handle errors as needed
            }
        }


    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}