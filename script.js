function openHomePage() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'flex';
}
function openLibraryPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('libraryPage').style.display = 'flex';
}
function showशब्दContent() {
  var content = document.getElementById('content');
  content.innerHTML = `
    <p>पत्र</p>
    <p>रंगोली</p>
    <p>अक्षर</p>
    <p>छोटा</p>
    <p>डाकु</p>
  `;
}

function showवाक्यContent() {
  var content = document.getElementById('content');
  content.innerHTML = `
    <p>मेरा नाम राज है!</p>
    <p>मैंने पहला स्थान जिता!</p>
    <p>मैने खुबसुरत रांगोली बनायी!</p>
    <p>तुम कहा जा रहे हो!</p>
  `;
}

function showवाक्यांशContent() {
  var content = document.getElementById('content');
  content.innerHTML = `
    <p>एक प्यारा बच्चा</p>
    <p>बहुत सुंदर</p>
    <p>लंबे समय के बाद</p>
    <p>खुबसुरती से</p>
  `;
}
  
function openInteractiveExercisesPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('interactiveExercisesPage').style.display = 'flex';
}

function openMatchingPage() {
    // Implement logic for matching page
}
function openRecordingPage() {
    // Implement logic for recording page
}

function openTongueTwisterPage() {
   const tongueTwistersContainer = document.getElementById("tongueTwistersContainer");

    // Array of tongue twisters
    const tongueTwisters = [
        "कच्चा पापड़, पक्का पापड़",
        "जो हँसेगा वो फंसेगा, जो फंसेगा वो हँसेगा",
        "डाली डाली पे नज़र डाली, किसी ने अच्छी डाली, किसी ने बुरी डाली| जिस डाली पे मैंने नज़र डाली वही डाली किसी ने तोड़ डाली",
        "समझ समझ के समझ को समझो, समझ समझना भी एक समझ है",
        "मर हम भी गए मरहम के लिए, मरहम ना मिला हम दम से गए, हमदम के लिए, हमदम न मिला",
        "चार कचरी कच्चे चाचा, चार कचरी पक्के पक्की कचरी कच्चे चाचा, कच्ची कचरी पक्के",
        "दूबे दुबई में डूब गया",
        "लपक बबुलिया लपक, अब ना लपकबे तो लपकबे कब",
        "पके पेड़ पर पका पपीता, पका पेड़ या पका पपीता, पके पेड़ को पकड़े पिंकू, पिंकू पकड़े पका पपीता",
        "चार कचरी कच्चे चाचा, चार कचरी पक्के, पक्की कचरी कच्चे चाचा, कच्ची कचरी पक्के",
        "तोला राम ताला तोल के तेल में तुल गया, तुला हुआ तोला ताले के तले हुए तेल में तला गया"
    ];

    // Clear previous tongue twisters
    tongueTwistersContainer.innerHTML = "";

    // Display each tongue twister in a new paragraph
    tongueTwisters.forEach(twister => {
        const paragraph = document.createElement("p");
        paragraph.textContent = twister;
        tongueTwistersContainer.appendChild(paragraph);
    });  // Implement logic for tongue twister page
}