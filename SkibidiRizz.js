// Code made by Sam Rohrbach, definitions by Google and my friends

function doRizzlerStuff() {
    const response = document.getElementById('Skibidi').value
    function Prompt() {
        if (response == '') {
            alert('Please actually type something.');
        }
    }
    
    Prompt();
    
    function unrizz(word) { // Add words to translate right here
        // If a word is higher on the list, it gets translated first
        word = word.toLowerCase(); // just make everything lowercase
        word = word.replace(/rizzler/g, "charismatic person");
        word = word.replace(/rizz/g, "charisma");
        word = word.replace(/gyatt/g, "butt");
        word = word.replace(/gyat/g, "butt");
        word = word.replace(/skibidi/g, "evil");
        word = word.replace(/cap/g, "lie");
        word = word.replace(/drip/g, "style");
        word = word.replace(/fire/g, "cool");
        word = word.replace(/dogwater/g, "noob");
        word = word.replace(/litfam/g, "cool bro");
        word = word.replace(/fam/g, "family");
        word = word.replace(/bruh/g, "friend");
        word = word.replace(/bro/g, "friend");
        word = word.replace(/finsta/g, "fake Instagram");
        word = word.replace(/fire/g, "cool");
        word = word.replace(/bussin/g, "going really well");
        word = word.replace(/flexed/g, "showed off");
        word = word.replace(/flexing/g, "showing off");
        word = word.replace(/flex/g, "show off");
        word = word.replace(/goated/g, "considered the greatest of all time");
        word = word.replace(/lit/g, "cool");
        word = word.replace(/bet/g, "okay");
        word = word.replace(/lowkey/g, "discreet");
        word = word.replace(/goat/g, "greatest of all time");
        word = word.replace(/mewing/g, "jawline improving");
        word = word.replace(/ratio'd/g, "criticized");
        word = word.replace(/ratioed/g, "criticized");
        word = word.replace(/savage/g, "really cool");
        word = word.replace(/monkey/g, "mischievous child");
        word = word.replace(/squad/g, "friend group");
        word = word.replace(/ohio/g, "lawless");
        word = word.replace(/sus/g, "suspicious");
        word = word.replace(/zygote/g, "noob");
        word = word.replace(/sigma male/g, "leader");
        word = word.replace(/sigma/g, "leader");
        word = word.replace(/fanum tax/g, "food theft");
        word = word.replace(/phanum tax/g, "food theft");
        word = word.replace(/💀/g, "😂");
        word = word.replace(/😆/g, "😂");
        word = word.replace(/😭/g, "😂");
        word = word.replace(/delulu/g, "delusional");
        word = word.replace(/yass/g, "yes");
        word = word.replace(/griddy/g, "victory dance");
        word = word.replace(/finna/g, "going to");
        word = word.replace(/big yikes/g, "very embarrassing");
        word = word.replace(/cringe/g, "cringeworthy");
        word = word.replace(/boujee/g, "bourgeois");
        word = word.replace(/cheugy/g, "uncool");
        return word;
    }
    
    function PutTextInDoc() {
        const PrefixDocuText = document.querySelector('span#iPadPrefix');
        PrefixDocuText.innerHTML = 'iPad Kid slang: '
        const RealDocuText = document.querySelector('span#SkibidiRizzlerText');
        RealDocuText.innerHTML = unrizz(response);
    }
    
    PutTextInDoc();
}