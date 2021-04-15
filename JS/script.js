const reviews = [{
        id: 1,
        name: 'Seth Doyle',
        job: 'Web Developer',
        img: './images/seth-doyle-hF2XIzJimtM-unsplash.jpg',
        desc: "I had I was very sad this day. There were friendly people at the bar that engaged with me. Interactions with people was very well needed. I enjoyed a great Long Island ice tea,some tasty vegetarian nachos, and sat by the water"
    },
    {
        id: 2,
        name: 'Vlad Rudkov',
        job: 'Web Designer',
        img: './images/vlad-rudkov-rLzdes9_Q7I-unsplash.jpg',
        desc: "The Dropbox HQ in San Francisco is one of the best designed & most comfortable offices I have ever witnessed. Great stuff! If you happen to visit SanFran, don't miss the chance to witness it yourself."
    },
    {
        id: 3,
        name: 'Noah Busher',
        job: 'Web Architech',
        img: './images/noah-buscher-yOAZcM5xdpM-unsplash.jpg',
        desc: "staf sangat membantu untuk redeem voucher namun waktunya lumayan lama karena masih mengecek kode voucher secara manual, perlu ada perbaikan lantai dan penataan wahana karena di beberapa titik lantai keramik sudah terbuka dan kabel"
    },
    {
        id: 4,
        name: 'Christian buehner',
        job: 'UI / UX Engineer',
        img: './images/christian-buehner-JQFHdpOKz2k-unsplash.jpg',
        desc: "Kami menginap pada saat libur natal, saat datang jam 3 sore di lobby penuh dengan orang sedang antri untuk check in, karna pelayanan check in nya lama, kamar juga belum siap sehingga orang orang pada menumpuk di lobby, petugas hotel nya juga"
    },
    {
        id: 5,
        name: 'Amir Seilsepour',
        job: 'Web Developer',
        img: './images/amir-seilsepour-5vg_SarQimA-unsplash.jpg',
        desc: "Acara yang sangat bagus sekali terutama untuk saya yang seorang mahasiswa untuk lebih fokus lagi dalam mengembangkan passion dan menyiapkan diri saya untuk mengejar karir di masa depan Selalu totalitas dalam mengadakan event,utamanya TechMinar.KREEN benar"
    },

]

const avatar = document.querySelector('#avatar')
const Name = document.querySelector('.name')
const job = document.querySelector('.job')
const desc = document.querySelector('.desc')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const surpriseBtn = document.querySelector('.surprise')

let index = 3

window.addEventListener('load', () => {
    showReview()
})


// Display review

function showReview() {
    let review = reviews[index]
    avatar.src = review.img
    Name.innerText = review.name
    job.innerText = review.job
    desc.innerText = review.desc.split(" ").splice(0, 20).join(" ")
    desc.append(".....")
}

function previousReview() {
    index--

    if (index < 0) {
        index = reviews.length - 1
    }

    showReview()
}

function nextReview() {
    index++

    if (index > reviews.length - 1) {
        index = 0
    }

    showReview()
}

function surpriseMe() {
    let randNo = ~~(Math.random() * reviews.length)

    index = randNo
    showReview()
}

// Event Listeners

prevBtn.addEventListener('click', previousReview)
nextBtn.addEventListener('click', nextReview)
surpriseBtn.addEventListener('click', surpriseMe)