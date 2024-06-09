import express from 'express';

const  app = express();
const news  = [
    {
        "id": 1,
        "headline": "Bicycle Accident Due to Fatigue",
        "content": "In a surprising turn of events, a bicycle fell over in the middle of the street yesterday. Witnesses reported that the bicycle was simply two-tired.",
        "image": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
        "id": 2,
        "headline": "Gym Avoidance Linked to Relationship Issues",
        "content": "Recent studies reveal that some couples avoid going to the gym because their relationships don’t work out. Experts suggest that this might be due to underlying compatibility issues.",
        "image": "https://example.com/images/gym_avoidance.jpg"
    },
    {
        "id": 3,
        "headline": "Culinary Mystery Solved: Fake Spaghetti Identified",
        "content": "After much speculation, food experts have confirmed that the fake spaghetti seen at local markets is indeed an impasta. Consumers are advised to check their pasta sources.",
        "image": "https://example.com/images/fake_spaghetti.jpg"
    },
    {
        "id": 4,
        "headline": "Grape Stomp Incident Leads to Minor Whining",
        "content": "During the annual grape stomp festival, a grape was stepped on but didn’t react aggressively. Instead, it let out a little wine, much to the amusement of the participants.",
        "image": "https://example.com/images/grape_stomp.jpg"
    },
    {
        "id": 5,
        "headline": "Math Book’s Emotional Struggle Revealed",
        "content": "In a heartfelt confession, a math book revealed it has been feeling sad due to having too many problems. Support groups are being formed to help books in similar situations.",
        "image": "https://example.com/images/sad_math_book.jpg"
    },
    {
        "id": 6,
        "headline": "Award-Winning Scarecrow Lauded for Field Performance",
        "content": "A scarecrow has won a prestigious award for being outstanding in his field. The community celebrates his dedication and hard work in keeping the fields safe.",
        "image": "https://example.com/images/scarecrow_award.jpg"
    },
    {
        "id": 7,
        "headline": "Scientists Question Atom Integrity",
        "content": "A growing number of scientists have expressed distrust in atoms, stating that they make up everything. This revelation has sparked debates in the scientific community.",
        "image": "https://example.com/images/atom_integrity.jpg"
    },
    {
        "id": 8,
        "headline": "Skeletons Avoid Confrontation Due to Lack of Guts",
        "content": "Skeletons have been reported to avoid fighting each other, with experts attributing this behavior to their lack of guts. This discovery adds a new layer to our understanding of skeletal behavior.",
        "image": "https://example.com/images/skeleton_guts.jpg"
    },
    {
        "id": 9,
        "headline": "Fake Cheese Scandal: Nacho Cheese Exposed",
        "content": "In a recent scandal, it was uncovered that some cheese products are not what they claim to be. The fraudulent cheese has been labeled as nacho cheese, misleading many consumers.",
        "image": "https://example.com/images/nacho_cheese.jpg"
    },
    {
        "id": 10,
        "headline": "Frostbite Alert: Snowman and Vampire Cross Paths",
        "content": "In an unusual encounter, a snowman was crossed with a vampire, resulting in frostbite. Health officials are advising caution in areas where such encounters might occur.",
        "image": "https://example.com/images/frostbite_alert.jpg"
    }
]



// app.get('/',(req,res)=>{
//     res.send('Server is ready')
// })
app.get('/api/news',(req,res)=>{
    res.send(news)
    
})
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`sever is running ${port} `)
})



