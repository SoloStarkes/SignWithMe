# tokenize word to convert each word into a queue of characters
# data structure must have fast access and insert
def tokenize_input(inputData):
    words_list = []
    for word in inputData.split():
        words_list.append(list(word))
    return words_list


def translate():
    # get the text from the input div in the page
    # each char must be converted to a letter form the
    word = "Our goal at Sign With Me is to cultivate understanding and inclusion " \
           "through the power of sign language."
    word_to_char_map = tokenize_input(word)
    print(word_to_char_map)


translate()
