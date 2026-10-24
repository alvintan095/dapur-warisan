/* =========================================================
   Dapur Warisan — Logika Aplikasi Multi-Halaman (app.js)
   ========================================================= */

/* =========================================================
   5.1 DATA CONTOH AWAL (SEED DATA)
   ========================================================= */
var SAMPLE_DATA = {
  family: { name: 'Keluarga Santoso', code: 'SNTS-2024' },
  categories: ['Semua', 'Sarapan', 'Makan Siang', 'Makan Malam', 'Camilan', 'Minuman', 'Hari Raya'],
  members: [
    { name: 'Nenek Ratna', email: 'ratna@keluarga.id', role: 'Anggota' },
    { name: 'Ayah Budi', email: 'budi@keluarga.id', role: 'Admin' },
    { name: 'Ibu Sari', email: 'sari@keluarga.id', role: 'Anggota' },
  ],
  recipes: [
    {
      id: 'rendang', title: 'Rendang Daging Padang', cat: 'Hari Raya', time: 240, servings: 6, difficulty: 'Sulit',
      origin: 'Nenek Ratna', fav: true,
      img: 'https://images.unsplash.com/photo-1677921755291-c39158477b8e?w=800&h=600&fit=crop&auto=format',
      desc: 'Rendang kering yang dimasak perlahan sampai bumbunya meresap dan berwarna cokelat gelap.',
      story: 'Nenek selalu memasak rendang ini dua hari sebelum Lebaran. Kuncinya sabar — jangan berhenti mengaduk.',
      ingredients: [
        { name: 'Daging sapi', qty: 1000, unit: 'gram', cat: 'Daging' },
        { name: 'Santan kental', qty: 1000, unit: 'ml', cat: 'Lainnya' },
        { name: 'Bawang merah', qty: 12, unit: 'siung', cat: 'Bumbu' },
        { name: 'Cabai merah', qty: 15, unit: 'buah', cat: 'Sayur' },
      ],
      steps: [
        'Haluskan bawang merah, bawang putih, cabai, jahe, dan lengkuas.',
        'Masukkan santan dan bumbu halus ke dalam wajan besar, aduk di atas api sedang.',
        'Tambahkan daging, lalu masak sambil terus diaduk hingga santan mengental dan rendang kering.',
      ],
    },
    {
      id: 'nasgor', title: 'Nasi Goreng Kampung', cat: 'Sarapan', time: 20, servings: 2, difficulty: 'Mudah',
      origin: 'Ayah Budi', fav: false,
      img: 'https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?w=800&h=600&fit=crop&auto=format',
      desc: 'Nasi goreng terasi dengan telur ceplok dan kerupuk.',
      story: 'Menu andalan Ayah setiap Sabtu pagi — pakai nasi sisa semalam supaya tidak lembek.',
      ingredients: [
        { name: 'Nasi putih', qty: 2, unit: 'piring', cat: 'Lainnya' },
        { name: 'Bawang merah', qty: 4, unit: 'siung', cat: 'Bumbu' },
        { name: 'Telur', qty: 2, unit: 'butir', cat: 'Lainnya' },
      ],
      steps: ['Ulek bawang, cabai, dan terasi.', 'Tumis bumbu, masukkan nasi dan kecap manis.', 'Sajikan dengan telur ceplok dan kerupuk.'],
    },
    {
      id: 'bubur-ayam', title: 'Bubur Ayam Kuah Kuning', cat: 'Sarapan', time: 45, servings: 4, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: true,
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&auto=format',
      desc: 'Bubur nasi lembut dengan suwiran ayam, kacang kedelai goreng, seledri, dan siraman kuah kaldu kuning gurih.',
      story: 'Sarapan hangat favorit keluarga saat pagi hujan atau ketika ada yang sedang kurang enak badan.',
      ingredients: [
        { name: 'Beras putih', qty: 200, unit: 'gram', cat: 'Lainnya' },
        { name: 'Dada ayam', qty: 250, unit: 'gram', cat: 'Daging' },
        { name: 'Bawang putih', qty: 4, unit: 'siung', cat: 'Bumbu' },
        { name: 'Kunyit', qty: 2, unit: 'cm', cat: 'Bumbu' },
        { name: 'Daun seledri', qty: 2, unit: 'batang', cat: 'Sayur' },
        { name: 'Kecap manis', qty: 2, unit: 'sdm', cat: 'Bumbu' },
      ],
      steps: [
        'Masak beras dengan air kaldu ayam dan sedikit garam sambil terus diaduk hingga menjadi bubur yang lembut.',
        'Tumis bumbu halus bawang merah, bawang putih, kunyit, dan ketumbar, lalu masukkan ke rebusan ayam untuk membuat kuah kuning.',
        'Angkat ayam, goreng sebentar lalu suwir-suwir dagingnya.',
        'Tuang bubur ke mangkuk, siram kuah kuning, lalu beri suwiran ayam, seledri, bawang goreng, dan kerupuk.',
      ],
    },
    {
      id: 'telur-dadar-tebal', title: 'Telur Dadar Daun Bawang', cat: 'Sarapan', time: 15, servings: 3, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: false,
      img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop&auto=format',
      desc: 'Telur dadar rumahan yang tebal, wangi daun bawang, dan garing di bagian pinggirnya.',
      story: 'Lauk penyelamat di pagi hari yang sibuk sebelum berangkat sekolah dan kerja.',
      ingredients: [
        { name: 'Telur ayam', qty: 4, unit: 'butir', cat: 'Lainnya' },
        { name: 'Daun bawang', qty: 2, unit: 'batang', cat: 'Sayur' },
        { name: 'Bawang merah', qty: 4, unit: 'siung', cat: 'Bumbu' },
        { name: 'Cabai merah', qty: 3, unit: 'buah', cat: 'Sayur' },
        { name: 'Tepung beras', qty: 1, unit: 'sdm', cat: 'Lainnya' },
      ],
      steps: [
        'Iris tipis bawang merah, cabai merah, dan daun bawang.',
        'Kocok lepas telur bersama irisan bumbu, garam, lada, dan larutan tepung beras agar dadar tebal dan padat.',
        'Panaskan minyak agak banyak di wajan, tuang adonan telur dan masak dengan api sedang hingga kedua sisi kuning keemasan.',
      ],
    },
    {
      id: 'soto-ayam', title: 'Soto Ayam Kuah Bening', cat: 'Sarapan', time: 60, servings: 5, difficulty: 'Sedang',
      origin: 'Nenek Ratna', fav: true,
      img: 'https://images.unsplash.com/photo-1666239308347-4292ea2ff777?w=800&h=600&fit=crop&auto=format',
      desc: 'Soto ayam segar dengan soun, tauge, telur rebus, suwiran ayam, dan perasan jeruk nipis.',
      story: 'Resep turun-temurun Nenek Ratna yang kuahnya selalu bening namun kaya rempah serai dan daun jeruk.',
      ingredients: [
        { name: 'Ayam kampung', qty: 500, unit: 'gram', cat: 'Daging' },
        { name: 'Soun kering', qty: 100, unit: 'gram', cat: 'Lainnya' },
        { name: 'Tauge pendek', qty: 100, unit: 'gram', cat: 'Sayur' },
        { name: 'Telur rebus', qty: 4, unit: 'butir', cat: 'Lainnya' },
        { name: 'Serai', qty: 2, unit: 'batang', cat: 'Bumbu' },
        { name: 'Kunyit', qty: 3, unit: 'cm', cat: 'Bumbu' },
      ],
      steps: [
        'Rebus ayam bersama serai dan daun salam hingga empuk, lalu angkat ayam dan saring kaldunya.',
        'Tumis bumbu halus bawang putih, bawang merah, kemiri, kunyit, dan jahe hingga harum, kemudian masukkan ke panci kaldu.',
        'Goreng ayam sebentar lalu suwir-suwir dagingnya.',
        'Tata soun, tauge, kol iris, suwiran ayam, dan telur rebus di mangkuk, lalu siram kuah soto mendidih.',
      ],
    },
    {
      id: 'ayam-goreng', title: 'Ayam Goreng Ungkep Bumbu Kuning', cat: 'Makan Siang', time: 45, servings: 4, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: true,
      img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&auto=format',
      desc: 'Ayam ungkep rempah kunyit dan ketumbar yang digoreng garing di luar namun tetap empuk di dalam.',
      story: 'Menu favorit anak-anak setiap pulang sekolah, selalu habis bersama nasi hangat dan sambal tomat.',
      ingredients: [
        { name: 'Ayam potong', qty: 800, unit: 'gram', cat: 'Daging' },
        { name: 'Bawang putih', qty: 6, unit: 'siung', cat: 'Bumbu' },
        { name: 'Kunyit', qty: 4, unit: 'cm', cat: 'Bumbu' },
        { name: 'Lengkuas parut', qty: 5, unit: 'cm', cat: 'Bumbu' },
        { name: 'Ketumbar bubuk', qty: 1, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Daun salam', qty: 3, unit: 'lembar', cat: 'Bumbu' },
      ],
      steps: [
        'Haluskan bawang putih, bawang merah, kemiri, kunyit, dan ketumbar.',
        'Ungkep potongan ayam bersama bumbu halus, parutan lengkuas, daun salam, serai, dan air secukupnya hingga air menyusut.',
        'Panaskan minyak banyak, goreng ayam beserta bumbu lengkuasnya hingga kuning kecokelatan dan garing.',
      ],
    },
    {
      id: 'sayur-sop', title: 'Sayur Sop Ayam Rumahan', cat: 'Makan Siang', time: 30, servings: 4, difficulty: 'Mudah',
      origin: 'Nenek Ratna', fav: true,
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&auto=format',
      desc: 'Sup bening hangat berisi potongan ayam, wortel, kentang, buncis, kol, dan taburan bawang goreng.',
      story: 'Masakan kuah paling nyaman di perut yang hampir setiap minggu hadir di meja makan keluarga.',
      ingredients: [
        { name: 'Dada ayam potong dadu', qty: 250, unit: 'gram', cat: 'Daging' },
        { name: 'Wortel', qty: 2, unit: 'buah', cat: 'Sayur' },
        { name: 'Kentang', qty: 2, unit: 'buah', cat: 'Sayur' },
        { name: 'Buncis', qty: 100, unit: 'gram', cat: 'Sayur' },
        { name: 'Bawang putih', qty: 4, unit: 'siung', cat: 'Bumbu' },
        { name: 'Daun bawang & seledri', qty: 2, unit: 'batang', cat: 'Sayur' },
      ],
      steps: [
        'Rebus potongan ayam dalam air mendidih hingga berkaldu dan buang buih di permukaannya agar kuah bening.',
        'Tumis bawang putih geprek dan lada bubuk hingga wangi, lalu tuang ke dalam panci kaldu.',
        'Masukkan kentang dan wortel terlebih dahulu hingga setengah empuk, lalu tambahkan buncis, kol, daun bawang, dan seledri.',
        'Koreksi rasa dengan garam serta sedikit gula, angkat, dan sajikan dengan taburan bawang goreng.',
      ],
    },
    {
      id: 'tempe-orek', title: 'Tempe Orek Kecap Manis', cat: 'Makan Siang', time: 20, servings: 4, difficulty: 'Mudah',
      origin: 'Ayah Budi', fav: false,
      img: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=800&h=600&fit=crop&auto=format',
      desc: 'Potongan tempe goreng yang dimasak bersama bawang, cabai iris, lengkuas, dan kecap manis legit.',
      story: 'Lauk sederhana yang tidak pernah gagal bikin nambah nasi, enak disimpan sampai sore.',
      ingredients: [
        { name: 'Tempe papan', qty: 300, unit: 'gram', cat: 'Lainnya' },
        { name: 'Kecap manis', qty: 4, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Bawang merah', qty: 5, unit: 'siung', cat: 'Bumbu' },
        { name: 'Bawang putih', qty: 3, unit: 'siung', cat: 'Bumbu' },
        { name: 'Cabai merah keriting', qty: 5, unit: 'buah', cat: 'Sayur' },
      ],
      steps: [
        'Potong tempe memanjang seperti korek api, lalu goreng setengah kering dan tiriskan.',
        'Tumis irisan bawang merah, bawang putih, cabai merah, daun salam, dan lengkuas hingga harum.',
        'Masukkan tempe goreng, tambahkan kecap manis, sedikit air, garam, dan lada, lalu aduk hingga bumbu meresap.',
      ],
    },
    {
      id: 'tumis-kangkung', title: 'Tumis Kangkung Bawang Putih', cat: 'Makan Siang', time: 15, servings: 3, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: false,
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&auto=format',
      desc: 'Cah kangkung segar yang dimasak cepat di atas api besar dengan bawang putih, cabai, dan saus tiram.',
      story: 'Rahasia Ibu supaya kangkung tetap hijau cerah dan renyah adalah memasaknya tidak lebih dari dua menit.',
      ingredients: [
        { name: 'Kangkung segar', qty: 2, unit: 'ikat', cat: 'Sayur' },
        { name: 'Bawang putih', qty: 4, unit: 'siung', cat: 'Bumbu' },
        { name: 'Cabai rawit merah', qty: 4, unit: 'buah', cat: 'Sayur' },
        { name: 'Saus tiram', qty: 2, unit: 'sdm', cat: 'Bumbu' },
      ],
      steps: [
        'Petik daun dan batang muda kangkung, lalu cuci bersih di bawah air mengalir.',
        'Tumis bawang putih cincang dan irisan cabai hingga harum dan kekuningan.',
        'Besarkan api, masukkan kangkung, saus tiram, dan sedikit air, lalu aduk cepat hingga layu dan segera angkat.',
      ],
    },
    {
      id: 'mie-goreng-spesial', title: 'Mie Goreng Jawa Spesial', cat: 'Makan Malam', time: 20, servings: 3, difficulty: 'Mudah',
      origin: 'Ayah Budi', fav: true,
      img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop&auto=format',
      desc: 'Mie telur goreng bumbu kemiri dan bawang putih dengan campuran telur orak-arik, bakso, serta sawi hijau.',
      story: 'Hidangan malam minggu paling ditunggu di rumah karena aromanya langsung memenuhi seluruh dapur.',
      ingredients: [
        { name: 'Mie telur kering', qty: 200, unit: 'gram', cat: 'Lainnya' },
        { name: 'Telur ayam', qty: 2, unit: 'butir', cat: 'Lainnya' },
        { name: 'Bakso sapi', qty: 6, unit: 'buah', cat: 'Daging' },
        { name: 'Sawi hijau', qty: 1, unit: 'ikat', cat: 'Sayur' },
        { name: 'Kecap manis', qty: 3, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Bawang putih', qty: 4, unit: 'siung', cat: 'Bumbu' },
      ],
      steps: [
        'Rebus mie telur hingga setengah matang, tiriskan dan beri satu sendok minyak agar tidak lengket.',
        'Haluskan bawang putih, bawang merah, kemiri sangrai, dan merica, lalu tumis hingga matang.',
        'Sisihkan bumbu ke pinggir wajan, masukkan telur untuk dibuat orak-arik, lalu masukkan irisan bakso dan sawi hijau.',
        'Masukkan mie dan kecap manis, aduk rata di atas api besar hingga beraroma smokey, lalu sajikan.',
      ],
    },
    {
      id: 'sate-ayam', title: 'Sate Ayam Bumbu Kacang', cat: 'Makan Malam', time: 45, servings: 4, difficulty: 'Sedang',
      origin: 'Ayah Budi', fav: true,
      img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop&auto=format',
      desc: 'Sate daging ayam bakar yang empuk dengan siraman saus kacang tanah lembut, kecap manis, dan acar bawang.',
      story: 'Setiap acara kumpul malam keluarga, Ayah dan anak-anak selalu kompak membakar sate ini di teras rumah.',
      ingredients: [
        { name: 'Dada ayam fillet', qty: 500, unit: 'gram', cat: 'Daging' },
        { name: 'Kacang tanah goreng', qty: 200, unit: 'gram', cat: 'Lainnya' },
        { name: 'Kecap manis', qty: 5, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Bawang putih', qty: 4, unit: 'siung', cat: 'Bumbu' },
        { name: 'Cabai merah', qty: 4, unit: 'buah', cat: 'Sayur' },
        { name: 'Jeruk limau', qty: 1, unit: 'buah', cat: 'Bumbu' },
      ],
      steps: [
        'Potong dadu daging ayam, tusukkan ke tusuk sate yang sudah direndam air.',
        'Haluskan kacang tanah goreng bersama bawang putih, bawang merah, dan cabai yang sudah digoreng, lalu masak dengan air dan gula merah hingga berminyak.',
        'Olesi sate dengan campuran sedikit bumbu kacang dan kecap manis, lalu bakar di atas panggangan hingga matang kecokelatan.',
        'Sajikan sate ayam dengan siraman saus kacang, kecap manis, bawang merah iris, dan perasan jeruk limau.',
      ],
    },
    {
      id: 'bakso-kuah', title: 'Bakso Sapi Kuah Kaldu Hangat', cat: 'Makan Malam', time: 40, servings: 4, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: true,
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&auto=format',
      desc: 'Bakso daging sapi kenyal dengan kuah kaldu bawang putih yang gurih, dilengkapi bihun, sawi, dan seledri.',
      story: 'Makanan sejuta umat yang selalu dirindukan saat malam dingin — kuahnya dibuat dari rebusan tulang sapi asli.',
      ingredients: [
        { name: 'Bakso sapi siap masak', qty: 20, unit: 'buah', cat: 'Daging' },
        { name: 'Tulang sumsum sapi', qty: 300, unit: 'gram', cat: 'Daging' },
        { name: 'Bihun jagung', qty: 100, unit: 'gram', cat: 'Lainnya' },
        { name: 'Sawi hijau', qty: 1, unit: 'ikat', cat: 'Sayur' },
        { name: 'Bawang putih goreng', qty: 6, unit: 'siung', cat: 'Bumbu' },
      ],
      steps: [
        'Rebus tulang sapi dengan api kecil hingga menghasilkan kaldu yang gurih dan harum.',
        'Haluskan bawang putih goreng dan merica butiran, lalu masukkan ke dalam kuah kaldu bersama garam.',
        'Masukkan bakso sapi dan masak hingga bakso mengapung serta mekar.',
        'Susun bihun dan sawi rebus di mangkuk, tuang bakso beserta kuah panasnya, lalu taburi seledri dan bawang goreng.',
      ],
    },
    {
      id: 'ayam-kecap', title: 'Ayam Kecap Mentega Rumahan', cat: 'Makan Malam', time: 35, servings: 4, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: false,
      img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&auto=format',
      desc: 'Potongan ayam goreng yang dimasak dalam saus kecap manis, mentega, dan irisan bawang bombay yang harum.',
      story: 'Menu makan malam favorit seluruh anggota keluarga karena rasanya manis gurih dan tidak pedas.',
      ingredients: [
        { name: 'Ayam potong', qty: 600, unit: 'gram', cat: 'Daging' },
        { name: 'Bawang bombay', qty: 1, unit: 'buah', cat: 'Sayur' },
        { name: 'Bawang putih', qty: 4, unit: 'siung', cat: 'Bumbu' },
        { name: 'Kecap manis', qty: 5, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Mentega', qty: 2, unit: 'sdm', cat: 'Lainnya' },
      ],
      steps: [
        'Bumbui ayam dengan garam dan merica, lalu goreng setengah matang dan tiriskan.',
        'Panaskan mentega, tumis bawang putih cincang dan irisan bawang bombay hingga layu serta harum.',
        'Masukkan ayam goreng, tambahkan kecap manis, saus tiram, sedikit air, dan pala bubuk, lalu masak hingga kuah mengental.',
      ],
    },
    {
      id: 'bakwan-sayur', title: 'Bakwan Sayur Renyah', cat: 'Camilan', time: 25, servings: 5, difficulty: 'Mudah',
      origin: 'Nenek Ratna', fav: true,
      img: 'https://images.unsplash.com/photo-1666239308347-4292ea2ff777?w=800&h=600&fit=crop&auto=format',
      desc: 'Gorengan sayur kol, wortel, dan tauge dengan adonan tepung berbumbu yang garing di luar dan lembut di dalam.',
      story: 'Camilan sore wajib di rumah Nenek, paling nikmat disantap hangat sambil menggigit cabai rawit hijau.',
      ingredients: [
        { name: 'Tepung terigu', qty: 200, unit: 'gram', cat: 'Lainnya' },
        { name: 'Tepung beras', qty: 2, unit: 'sdm', cat: 'Lainnya' },
        { name: 'Wortel iris korek api', qty: 2, unit: 'buah', cat: 'Sayur' },
        { name: 'Kol iris tipis', qty: 150, unit: 'gram', cat: 'Sayur' },
        { name: 'Daun bawang', qty: 2, unit: 'batang', cat: 'Sayur' },
        { name: 'Bawang putih', qty: 3, unit: 'siung', cat: 'Bumbu' },
      ],
      steps: [
        'Campurkan tepung terigu, tepung beras, bawang putih halus, ketumbar, garam, dan air dingin hingga menjadi adonan kental.',
        'Masukkan irisan wortel, kol, tauge, dan daun bawang, lalu aduk rata.',
        'Sendokkan adonan ke dalam minyak panas dengan api sedang, goreng hingga kedua sisinya kuning keemasan dan renyah.',
      ],
    },
    {
      id: 'pisang-goreng', title: 'Pisang Goreng Kepok Krispi', cat: 'Camilan', time: 20, servings: 4, difficulty: 'Mudah',
      origin: 'Nenek Ratna', fav: true,
      img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop&auto=format',
      desc: 'Pisang kepok matang yang manis berbalut tepung renyah beraroma vanili dan sedikit wijen.',
      story: 'Teman setia minum teh dan kopi sore hari sambil berbincang di ruang keluarga.',
      ingredients: [
        { name: 'Pisang kepok matang', qty: 8, unit: 'buah', cat: 'Sayur' },
        { name: 'Tepung beras', qty: 100, unit: 'gram', cat: 'Lainnya' },
        { name: 'Tepung terigu', qty: 50, unit: 'gram', cat: 'Lainnya' },
        { name: 'Gula pasir', qty: 1, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Margarin cair', qty: 1, unit: 'sdm', cat: 'Lainnya' },
      ],
      steps: [
        'Kupas pisang kepok dan belah dua memanjang atau bentuk kipas tanpa putus.',
        'Aduk rata tepung beras, tepung terigu, gula, sejumput garam, margarin cair, dan air hingga adonan pas kekentalannya.',
        'Celupkan pisang ke dalam adonan tepung, lalu goreng di minyak panas hingga kulitnya garing kecokelatan.',
      ],
    },
    {
      id: 'martabak-telur-mini', title: 'Martabak Telur Kulit Lumpia', cat: 'Camilan', time: 25, servings: 4, difficulty: 'Mudah',
      origin: 'Ayah Budi', fav: false,
      img: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=800&h=600&fit=crop&auto=format',
      desc: 'Martabak telur praktis dengan kulit lumpia yang renyah dan isian telur daun bawang berbumbu gurih.',
      story: 'Jajanan malam kesukaan keluarga yang ternyata sangat mudah dibuat sendiri di rumah kapan saja.',
      ingredients: [
        { name: 'Kulit lumpia siap pakai', qty: 10, unit: 'lembar', cat: 'Lainnya' },
        { name: 'Telur ayam', qty: 4, unit: 'butir', cat: 'Lainnya' },
        { name: 'Daun bawang iris halus', qty: 4, unit: 'batang', cat: 'Sayur' },
        { name: 'Daging cincang matang', qty: 100, unit: 'gram', cat: 'Daging' },
        { name: 'Bumbu kari bubuk', qty: 1, unit: 'sdt', cat: 'Bumbu' },
      ],
      steps: [
        'Kocok lepas telur bersama irisan daun bawang, daging cincang, bawang putih bubuk, bumbu kari, garam, dan merica.',
        'Bentangkan kulit lumpia, beri dua sendok makan adonan telur di tengahnya, lalu lipat rapi berbentuk amplop.',
        'Segera goreng di wajan datar dengan minyak sedang hingga kedua sisinya garing dan keemasan.',
      ],
    },
    {
      id: 'es-teh-manis', title: 'Es Teh Manis Melati Segar', cat: 'Minuman', time: 10, servings: 4, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: true,
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop&auto=format',
      desc: 'Seduhan teh tubruk melati pekat yang harum dengan gula asli dan es batu dingin yang menyegarkan.',
      story: 'Minuman paling populer di meja makan Indonesia — diseduh dari campuran dua merek teh tubruk favorit Ibu.',
      ingredients: [
        { name: 'Teh tubruk melati', qty: 3, unit: 'sdm', cat: 'Lainnya' },
        { name: 'Gula pasir', qty: 5, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Air panas mendidih', qty: 500, unit: 'ml', cat: 'Lainnya' },
        { name: 'Es batu', qty: 400, unit: 'gram', cat: 'Lainnya' },
      ],
      steps: [
        'Seduh teh tubruk melati dengan air mendidih, diamkan selama 5 menit hingga warnanya pekat dan aromanya keluar.',
        'Saring ampas teh ke dalam teko, tambahkan gula pasir selagi teh masih panas, lalu aduk hingga larut.',
        'Siapkan gelas berisi penuh es batu, lalu tuang teh manis hangat ke dalamnya dan sajikan segera.',
      ],
    },
    {
      id: 'es-kopi-susu', title: 'Es Kopi Susu Gula Aren', cat: 'Minuman', time: 10, servings: 2, difficulty: 'Mudah',
      origin: 'Ayah Budi', fav: true,
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop&auto=format',
      desc: 'Minuman kopi dingin kekinian dengan perpaduan kopi hitam pekat, susu segar, dan manis legit gula aren.',
      story: 'Sejak Ayah tahu takaran pas gula arennya, keluarga tidak perlu lagi jajan es kopi susu di luar.',
      ingredients: [
        { name: 'Kopi bubuk tanpa ampas', qty: 2, unit: 'sdm', cat: 'Lainnya' },
        { name: 'Gula aren cair', qty: 4, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Susu cair full cream', qty: 300, unit: 'ml', cat: 'Lainnya' },
        { name: 'Es batu', qty: 200, unit: 'gram', cat: 'Lainnya' },
      ],
      steps: [
        'Seduh kopi dengan sedikit air panas hingga larut dan pekat, lalu biarkan hangat.',
        'Tuang gula aren cair di dasar gelas saji, masukkan es batu hingga hampir penuh.',
        'Tuangkan susu cair dingin, lalu siram ekstrak kopi di bagian paling atas dan aduk sebelum diminum.',
      ],
    },
    {
      id: 'es-jeruk-peras', title: 'Es Jeruk Peras Murni', cat: 'Minuman', time: 10, servings: 2, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: false,
      img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&h=600&fit=crop&auto=format',
      desc: 'Minuman segar dari perasan jeruk manis asli dengan es batu, cocok menemani makan siang.',
      story: 'Minuman segar kaya vitamin yang selalu dibuat Ibu setelah makan hidangan bersantan atau gorengan.',
      ingredients: [
        { name: 'Jeruk peras manis', qty: 6, unit: 'buah', cat: 'Sayur' },
        { name: 'Gula pasir larutkan', qty: 2, unit: 'sdm', cat: 'Bumbu' },
        { name: 'Air matang dingin', qty: 200, unit: 'ml', cat: 'Lainnya' },
        { name: 'Es batu', qty: 150, unit: 'gram', cat: 'Lainnya' },
      ],
      steps: [
        'Belah dua buah jeruk peras, lalu peras airnya menggunakan alat pemeras jeruk sambil disaring bijinya.',
        'Campurkan air perasan jeruk dengan larutan gula pasir dan air dingin di dalam gelas.',
        'Tambahkan es batu secukupnya, aduk rata, dan siap disajikan.',
      ],
    },
    {
      id: 'opor-ayam', title: 'Opor Ayam Kampung Lebaran', cat: 'Hari Raya', time: 60, servings: 6, difficulty: 'Sedang',
      origin: 'Nenek Ratna', fav: true,
      img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop&auto=format',
      desc: 'Ayam kampung empuk dalam kuah santan gurih berbumbu kemiri, ketumbar, serai, dan taburan bawang goreng.',
      story: 'Pasangan sejati ketupat dan sambal goreng di pagi Hari Raya yang selalu dinanti seluruh cucu.',
      ingredients: [
        { name: 'Ayam kampung potong', qty: 1000, unit: 'gram', cat: 'Daging' },
        { name: 'Santan sedang', qty: 800, unit: 'ml', cat: 'Lainnya' },
        { name: 'Kemiri sangrai', qty: 5, unit: 'butir', cat: 'Bumbu' },
        { name: 'Bawang merah', qty: 10, unit: 'siung', cat: 'Bumbu' },
        { name: 'Bawang putih', qty: 5, unit: 'siung', cat: 'Bumbu' },
        { name: 'Serai & lengkuas', qty: 2, unit: 'batang', cat: 'Bumbu' },
      ],
      steps: [
        'Haluskan bawang merah, bawang putih, kemiri sangrai, ketumbar, jintan, jahe, dan merica.',
        'Tumis bumbu halus bersama serai, lengkuas, daun salam, dan daun jeruk hingga matang serta harum.',
        'Masukkan potongan ayam, aduk hingga berubah warna, lalu tuang santan secara bertahap sambil terus diaduk.',
        'Masak dengan api kecil hingga daging ayam empuk dan kuah santan meresap gurih, lalu taburi bawang goreng.',
      ],
    },
    {
      id: 'kolak-pisang', title: 'Kolak Pisang Ubi Gula Merah', cat: 'Hari Raya', time: 30, servings: 5, difficulty: 'Mudah',
      origin: 'Ibu Sari', fav: true,
      img: 'https://images.unsplash.com/photo-1666239308347-4292ea2ff777?w=800&h=600&fit=crop&auto=format',
      desc: 'Hidangan manis berkuah santan dan gula aren harum pandan dengan potongan pisang kepok serta ubi kuning.',
      story: 'Menu primadona keluarga saat berbuka puasa di bulan Ramadan maupun hantaran hangat untuk tetangga.',
      ingredients: [
        { name: 'Pisang kepok matang', qty: 6, unit: 'buah', cat: 'Sayur' },
        { name: 'Ubi kuning kupas', qty: 300, unit: 'gram', cat: 'Sayur' },
        { name: 'Gula merah sisir', qty: 200, unit: 'gram', cat: 'Bumbu' },
        { name: 'Santan sedang', qty: 700, unit: 'ml', cat: 'Lainnya' },
        { name: 'Daun pandan', qty: 2, unit: 'lembar', cat: 'Bumbu' },
      ],
      steps: [
        'Rebus gula merah bersama air sedikit dan daun pandan hingga larut, lalu saring ke dalam panci bersih.',
        'Masukkan potongan ubi kuning, masak hingga ubi setengah empuk.',
        'Tambahkan potongan pisang kepok, santan, dan sejumput garam, lalu masak sambil diaduk perlahan agar santan tidak pecah.',
      ],
    },
  ],
  plan: {
    'Senin-Sarapan': 'nasgor',
    'Senin-Makan Siang': 'ayam-goreng',
    'Senin-Makan Malam': 'mie-goreng-spesial',
    'Selasa-Sarapan': 'bubur-ayam',
    'Selasa-Makan Siang': 'sayur-sop',
    'Rabu-Sarapan': 'telur-dadar-tebal',
    'Rabu-Makan Siang': 'tempe-orek',
    'Rabu-Makan Malam': 'rendang',
    'Kamis-Sarapan': 'soto-ayam',
    'Kamis-Makan Malam': 'bakso-kuah',
    'Jumat-Makan Siang': 'tumis-kangkung',
    'Jumat-Makan Malam': 'ayam-kecap',
    'Sabtu-Makan Malam': 'sate-ayam',
    'Minggu-Sarapan': 'bubur-ayam',
    'Minggu-Makan Siang': 'opor-ayam',
  },
  activity: [],
}


/* =========================================================
   5.2 KONSTANTA & PENGATURAN TETAP
   ========================================================= */
var DAYS = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
var SLOTS = ['Sarapan', 'Makan Siang', 'Makan Malam']
var SLOT_ICONS = ['coffee', 'sun', 'moon']
var CATEGORIES = ['Semua', 'Sarapan', 'Makan Siang', 'Makan Malam', 'Camilan', 'Minuman', 'Hari Raya']
var UNITS = ['gram', 'kg', 'ml', 'liter', 'buah', 'siung', 'sdm', 'sdt', 'butir', 'batang', 'lembar', 'ikat', 'ekor', 'piring', 'cm', 'potong']
var SHOP_GROUPS = ['Sayur', 'Daging', 'Bumbu', 'Lainnya', 'Tambahan']
var PRICE_PER_ITEM = { Daging: 45000, Sayur: 8000, Bumbu: 3000, Lainnya: 12000, Tambahan: 5000 }
var AVATAR_COLORS = ['#D9531E', '#6B8E4E', '#B8430F', '#A07A1F', '#5A6F8E']


/* =========================================================
   5.3 PENYIMPANAN DATA (LOCAL STORAGE & SESSION STORAGE)
   ========================================================= */
var STORAGE_KEY = 'dapur-warisan-data'
var USER_KEY = 'dapur-warisan-user'
var PREV_PAGE_KEY = 'dapur-warisan-prev'
var SHOP_STATE_KEY = 'dapur-warisan-belanja'
var FLASH_KEY = 'dapur-warisan-flash'

var store = {
  data: null,

  load: async function () {
    var saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      store.data = JSON.parse(saved)
      if (!Array.isArray(store.data.categories) || !store.data.categories.length) {
        store.data.categories = CATEGORIES.slice()
      }
      if (typeof SAMPLE_DATA !== 'undefined') {
        if (!Array.isArray(store.data.seededIds)) {
          store.data.seededIds = store.data.recipes.map(function (r) { return r.id })
        }
        SAMPLE_DATA.recipes.forEach(function (sampleRec) {
          var exists = store.data.recipes.some(function (r) { return r.id === sampleRec.id })
          if (!exists && store.data.seededIds.indexOf(sampleRec.id) < 0) {
            store.data.recipes.push(JSON.parse(JSON.stringify(sampleRec)))
            store.data.seededIds.push(sampleRec.id)
          }
        })
      }
      store.persist()
    } else if (typeof SAMPLE_DATA !== 'undefined') {
      store.data = JSON.parse(JSON.stringify(SAMPLE_DATA))
      if (!Array.isArray(store.data.categories) || !store.data.categories.length) {
        store.data.categories = CATEGORIES.slice()
      }
      store.data.seededIds = store.data.recipes.map(function (r) { return r.id })
      store.persist()
    } else {
      store.data = { family: { name: 'Keluarga Saya', code: makeCode() }, categories: CATEGORIES.slice(), members: [], recipes: [], plan: {}, activity: [] }
    }
    return store.data
  },

  persist: function () {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.data))
  },

  getCategories: function () {
    if (!store.data.categories || !store.data.categories.length) {
      store.data.categories = CATEGORIES.slice()
    }
    return store.data.categories
  },

  addCategory: async function (name) {
    var list = store.getCategories()
    list.push(name)
    store.persist()
  },

  renameCategory: async function (oldName, newName) {
    var list = store.getCategories()
    var idx = list.indexOf(oldName)
    if (idx < 0) return
    list[idx] = newName
    store.data.recipes.forEach(function (r) {
      if (r.cat === oldName) r.cat = newName
    })
    store.persist()
  },

  deleteCategory: async function (name, index) {
    var list = store.getCategories()
    var idx = typeof index === 'number' ? index : list.indexOf(name)
    if (idx < 0) return
    list.splice(idx, 1)
    var fallback = list[1] || list[0] || 'Lainnya'
    store.data.recipes.forEach(function (r) {
      if (r.cat === name) r.cat = fallback
    })
    store.persist()
  },

  saveRecipe: async function (recipe) {
    var list = store.data.recipes
    var index = list.findIndex(function (r) { return r.id === recipe.id })
    if (index >= 0) list[index] = recipe
    else list.push(recipe)
    store.persist()
    return recipe
  },

  deleteRecipe: async function (id) {
    store.data.recipes = store.data.recipes.filter(function (r) { return r.id !== id })
    Object.keys(store.data.plan).forEach(function (key) {
      if (store.data.plan[key] === id) delete store.data.plan[key]
    })
    store.persist()
  },

  setPlanSlot: async function (key, recipeId) {
    if (recipeId) store.data.plan[key] = recipeId
    else delete store.data.plan[key]
    store.persist()
  },

  saveMember: async function (member) {
    var list = store.data.members
    var index = list.findIndex(function (m) { return m.email === member.email })
    if (index >= 0) list[index] = member
    else list.push(member)
    store.persist()
  },

  addActivity: async function (who, what, object) {
    store.data.activity.unshift({ who: who, what: what, obj: object, at: new Date().toISOString() })
    store.data.activity = store.data.activity.slice(0, 20)
    store.persist()
  },
}

function makeCode() {
  return 'KLG-' + Math.floor(1000 + Math.random() * 9000)
}

function loadUser() {
  try {
    var raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

function saveUser(user) {
  currentUser = user
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
  else localStorage.removeItem(USER_KEY)
}


/* =========================================================
   5.4 FUNGSI UTILITAS & ALAT BANTU DOM
   ========================================================= */
function $(selector, root) { return (root || document).querySelector(selector) }
function $all(selector, root) { return Array.from((root || document).querySelectorAll(selector)) }
function on(selector, event, handler) {
  var el = $(selector)
  if (el) el.addEventListener(event, handler)
}
function fromTemplate(id) {
  var tpl = document.getElementById(id)
  return tpl ? tpl.content.firstElementChild.cloneNode(true) : null
}
function refreshIcons() { if (window.lucide) lucide.createIcons() }

function formatTime(minutes) {
  if (minutes < 60) return minutes + ' mnt'
  var rest = minutes % 60
  return Math.floor(minutes / 60) + ' jam' + (rest ? ' ' + rest + ' mnt' : '')
}
function formatQty(n) {
  if (Number.isInteger(n)) return String(n)
  return n.toFixed(n < 10 ? 1 : 0).replace('.', ',')
}
function initials(name) {
  return (name || '').split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0].toUpperCase() }).join('') || '?'
}
function colorFor(name) {
  var sum = 0
  var str = name || ''
  for (var i = 0; i < str.length; i++) sum += str.charCodeAt(i)
  return AVATAR_COLORS[sum % AVATAR_COLORS.length]
}
function paintAvatar(el, name) {
  if (!el) return
  el.textContent = initials(name)
  el.style.background = colorFor(name)
}
function timeAgo(iso) {
  var minutes = Math.round((Date.now() - new Date(iso)) / 60000)
  if (minutes < 1) return 'Baru saja'
  if (minutes < 60) return minutes + ' menit lalu'
  var hours = Math.round(minutes / 60)
  if (hours < 24) return hours + ' jam lalu'
  var days = Math.round(hours / 24)
  return days === 1 ? 'Kemarin' : days + ' hari lalu'
}
function todayName() { return DAYS[(new Date().getDay() + 6) % 7] }
function findRecipe(id) { return store.data.recipes.find(function (r) { return r.id === id }) }

var toastTimer = null
function toast(message, isError) {
  var el = $('#toast')
  if (!el) return
  el.innerHTML = '<i data-lucide="' + (isError ? 'circle-x' : 'circle-check') + '"></i>'
  el.append(message)
  el.classList.toggle('is-error', !!isError)
  el.hidden = false
  el.classList.remove('rise'); void el.offsetWidth; el.classList.add('rise')
  refreshIcons()
  clearTimeout(toastTimer)
  toastTimer = setTimeout(function () { el.hidden = true }, 2800)
}

function flash(message, isError) {
  try {
    sessionStorage.setItem(FLASH_KEY, JSON.stringify({ message: message, isError: !!isError }))
  } catch (e) {}
}

function consumeFlash() {
  try {
    var raw = sessionStorage.getItem(FLASH_KEY)
    if (!raw) return
    sessionStorage.removeItem(FLASH_KEY)
    var data = JSON.parse(raw)
    if (data && data.message) toast(data.message, data.isError)
  } catch (e) {}
}

function showErrors(form, errors) {
  if (!form) return
  $all('[data-error]', form).forEach(function (el) {
    el.textContent = errors[el.dataset.error] || ''
  })
}

$all('dialog.modal').forEach(function (dialog) {
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog || e.target.closest('[data-close]')) dialog.close()
  })
})


/* =========================================================
   5.5 AUTENTIKASI & ROUTER MULTI-HALAMAN (7 MENU)
   ========================================================= */
var currentUser = loadUser()
var currentPage = document.body.dataset.page || 'beranda'
var previousMainPage = sessionStorage.getItem(PREV_PAGE_KEY) || 'resep'
var authMode = 'masuk'

function pageUrl(page, id) {
  var file = page === 'auth' ? 'index.html' : page + '.html'
  return id ? file + '?id=' + encodeURIComponent(id) : file
}

function go(page, recipeId) {
  if (currentPage !== 'detail' && currentPage !== 'form' && currentPage !== 'auth') {
    try { sessionStorage.setItem(PREV_PAGE_KEY, currentPage) } catch (e) {}
  }
  location.href = pageUrl(page, recipeId)
}

$all('[data-tab]').forEach(function (tab) {
  tab.addEventListener('click', function () { setAuthMode(tab.dataset.tab) })
})

function setAuthMode(mode) {
  authMode = mode
  var isLogin = mode === 'masuk'
  $all('[data-tab]').forEach(function (t) { t.classList.toggle('is-active', t.dataset.tab === mode) })
  $all('.only-register').forEach(function (el) { el.hidden = isLogin })
  $all('.only-login').forEach(function (el) { el.hidden = !isLogin })
  if ($('#auth-title')) $('#auth-title').textContent = isLogin ? 'Selamat datang kembali' : 'Buat akun keluarga'
  if ($('#auth-subtitle')) $('#auth-subtitle').textContent = isLogin ? 'Masuk untuk melihat resep dan menu keluarga.' : 'Gabung dengan keluarga lewat kode, atau buat grup baru.'
  if ($('#auth-submit')) $('#auth-submit').textContent = isLogin ? 'Masuk' : 'Daftar'
  showErrors($('#auth-form'), {})
}

on('#toggle-password', 'click', function () {
  var input = $('#auth-form [name=password]')
  if (!input) return
  var show = input.type === 'password'
  input.type = show ? 'text' : 'password'
  this.innerHTML = '<i data-lucide="' + (show ? 'eye-off' : 'eye') + '"></i>'
  refreshIcons()
})

on('#auth-form', 'submit', async function (e) {
  e.preventDefault()
  var form = e.target
  var name = form.nama.value.trim()
  var email = form.email.value.trim()
  var errors = {}
  if (authMode === 'daftar' && !name) errors.nama = 'Nama wajib diisi'
  if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Format email belum benar'
  if (form.password.value.length < 6) errors.password = 'Password minimal 6 karakter'
  showErrors(form, errors)
  if (Object.keys(errors).length) return

  var member = store.data.members.find(function (m) { return m.email === email })
  if (!member) {
    member = { name: name || email.split('@')[0], email: email, role: store.data.members.some(function (m) { return m.role === 'Admin' }) ? 'Anggota' : 'Admin' }
    await store.saveMember(member)
    await store.addActivity(member.name, 'bergabung ke', store.data.family.name)
  } else if (name) {
    member.name = name
    await store.saveMember(member)
  }
  saveUser(member)
  form.reset()
  go('beranda')
})

on('#logout', 'click', function () {
  saveUser(null)
  go('auth')
})

document.addEventListener('click', function (e) {
  var link = e.target.closest('[data-go]')
  if (link) {
    e.preventDefault()
    go(link.dataset.go, link.dataset.id)
  }
})

var pageRenderers = {}

function renderChrome() {
  if (!currentUser) return
  paintAvatar($('#top-avatar'), currentUser.name)
  var famNameEl = $('.family-name')
  if (famNameEl) famNameEl.textContent = store.data.family.name
  var group = $('.avatar-group')
  if (!group) return
  group.innerHTML = ''
  var members = store.data.members
  members.slice(0, 4).forEach(function (m) {
    var a = document.createElement('span')
    a.className = 'avatar avatar-sm'
    paintAvatar(a, m.name)
    group.append(a)
  })
  if (members.length > 4) {
    var more = document.createElement('span')
    more.className = 'avatar avatar-sm avatar-more'
    more.textContent = '+' + (members.length - 4)
    group.append(more)
  }
}


/* =========================================================
   5.6 KOMPONEN KARTU RESEP & TOMBOL FAVORIT
   ========================================================= */
function recipeCard(recipe, compact) {
  var card = fromTemplate('tpl-recipe-card')
  if (compact) card.classList.add('compact')
  var img = $('img', card)
  img.src = recipe.img
  img.alt = recipe.title
  $('.tag', card).textContent = recipe.cat
  $('.recipe-title', card).textContent = recipe.title
  $('.time', card).textContent = formatTime(recipe.time)
  $('.serves', card).textContent = recipe.servings
  $('.heirloom-badge', card).hidden = !/^(nenek|kakek|mbah|eyang|oma|opa)/i.test(recipe.origin)
  setupFavButton($('.fav-btn', card), recipe)
  card.addEventListener('click', function () { go('detail', recipe.id) })
  return card
}

function setupFavButton(button, recipe) {
  if (!button) return
  button.dataset.recipe = recipe.id
  paintFav(button, recipe.fav)
  button.onclick = async function (e) {
    e.stopPropagation()
    recipe.fav = !recipe.fav
    await store.saveRecipe(recipe)
    if (recipe.fav && currentUser) await store.addActivity(currentUser.name, 'memfavoritkan', recipe.title)
    $all('.fav-btn[data-recipe="' + recipe.id + '"]').forEach(function (b) { paintFav(b, recipe.fav) })
    button.classList.remove('pop'); void button.offsetWidth; button.classList.add('pop')
    if (currentPage === 'favorit') renderFavoritesPage()
    if (currentPage === 'resep' && collection.sort === 'Favorit') renderCollectionList()
  }
}

function paintFav(button, on) {
  button.classList.toggle('is-on', on)
  button.setAttribute('aria-pressed', on)
  button.setAttribute('aria-label', on ? 'Hapus dari favorit' : 'Tambah ke favorit')
}


/* =========================================================
   5.7 HALAMAN BERANDA
   ========================================================= */
pageRenderers.beranda = function () {
  var hour = new Date().getHours()
  var greeting = hour < 11 ? 'Selamat pagi' : hour < 15 ? 'Selamat siang' : hour < 18 ? 'Selamat sore' : 'Selamat malam'
  var today = todayName()
  $('#home-greeting').textContent = greeting + ', ' + currentUser.name.split(' ')[0] + '!'
  $('#home-date').textContent = today + ', ' + new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })

  var todayBox = $('#home-today')
  todayBox.innerHTML = ''
  SLOTS.forEach(function (slot, i) {
    var recipe = findRecipe(store.data.plan[today + '-' + slot])
    var item = fromTemplate('tpl-today')
    $('.slot-label i', item).setAttribute('data-lucide', SLOT_ICONS[i])
    $('.slot-name', item).textContent = slot
    $('.today-title', item).textContent = recipe ? recipe.title : 'Belum dipilih'
    if (recipe) { $('img', item).src = recipe.img; $('.today-empty', item).remove() }
    else $('img', item).remove()
    item.addEventListener('click', function () { recipe ? go('detail', recipe.id) : go('menu') })
    todayBox.append(item)
  })

  var recent = $('#home-recent')
  recent.innerHTML = ''
  var latest = store.data.recipes.slice().reverse().slice(0, 6)
  latest.forEach(function (r) { recent.append(recipeCard(r, true)) })
  if (!latest.length) recent.innerHTML = '<p class="muted">Belum ada resep. <button type="button" class="link" data-go="form">Tambah resep pertama</button></p>'

  var heirloom = store.data.recipes.find(function (r) { return r.story })
  var box = $('#home-heirloom')
  box.hidden = !heirloom
  if (heirloom) {
    $('img', box).src = heirloom.img
    $('img', box).alt = heirloom.title
    $('h2', box).textContent = heirloom.title
    $('.heirloom-story', box).textContent = '“' + heirloom.story + '”'
    $('.heirloom-origin', box).textContent = '— ' + heirloom.origin
    $('button', box).onclick = function () { go('detail', heirloom.id) }
  }
}


/* =========================================================
   5.8 HALAMAN RESEP FAVORIT (FITUR BARU KE-7)
   ========================================================= */
var favFilter = { search: '' }

pageRenderers.favorit = function () {
  renderFavoritesPage()
}

function renderFavoritesPage() {
  var allFavs = store.data.recipes.filter(function (r) { return r.fav })
  $('#favorites-count').textContent = allFavs.length + ' resep disukai oleh anggota keluarga'

  var query = favFilter.search.toLowerCase()
  var filtered = allFavs.filter(function (r) {
    return r.title.toLowerCase().includes(query) ||
      r.cat.toLowerCase().includes(query) ||
      r.origin.toLowerCase().includes(query) ||
      r.ingredients.some(function (i) { return i.name.toLowerCase().includes(query) })
  })

  var grid = $('#favorites-list')
  grid.innerHTML = ''
  filtered.forEach(function (r) { grid.append(recipeCard(r)) })
  $('#favorites-empty').hidden = filtered.length > 0
  refreshIcons()
}

on('#favorites-search', 'input', function (e) {
  favFilter.search = e.target.value
  renderFavoritesPage()
})


/* =========================================================
   5.9 HALAMAN KOLEKSI RESEP & MANAJEMEN KATEGORI
   ========================================================= */
var collection = { search: '', category: 'Semua', sort: 'Terbaru', maxTime: 300, origin: 'Semua', loading: false }

function isAllCategory(c, index) {
  return index === 0
}

function countCategoryRecipes(c, index) {
  if (isAllCategory(c, index)) return store.data.recipes.length
  return store.data.recipes.filter(function (r) { return r.cat === c }).length
}

function renderCategoryChips() {
  var chips = $('#category-chips')
  if (!chips) return
  var cats = store.getCategories()
  if (cats.indexOf(collection.category) < 0) collection.category = cats[0] || 'Semua'
  chips.innerHTML = ''
  cats.forEach(function (c, idx) {
    var chip = document.createElement('button')
    chip.type = 'button'
    var active = c === collection.category
    chip.className = 'chip' + (active ? ' is-active' : '')
    chip.textContent = active ? c + ' (' + countCategoryRecipes(c, idx) + ')' : c
    chip.onclick = function () {
      collection.category = c
      renderCategoryChips()
      renderCollectionList()
    }
    chips.append(chip)
  })

  var manageBtn = document.createElement('button')
  manageBtn.type = 'button'
  manageBtn.className = 'chip'
  manageBtn.innerHTML = '<i data-lucide="pencil"></i> Kelola Kategori'
  manageBtn.onclick = openCategoryModal
  chips.append(manageBtn)
  refreshIcons()
}

function openCategoryModal() {
  var form = $('#category-add-form')
  if (form) form.reset()
  renderCategoryManageList()
  var modal = $('#modal-categories')
  if (modal) modal.showModal()
}

function renderCategoryManageList() {
  var box = $('#category-manage-list')
  if (!box) return
  box.innerHTML = ''
  var cats = store.getCategories()
  cats.forEach(function (catName, idx) {
    var row = fromTemplate('tpl-category-row')
    var input = $('.cat-edit-input', row)
    var saveBtn = $('.save-cat', row)
    var delBtn = $('.delete-cat', row)
    input.value = catName

    var commitRename = async function () {
      var newName = input.value.trim()
      if (!newName) {
        toast('Nama kategori tidak boleh kosong', true)
        input.value = catName
        return
      }
      if (newName === catName) {
        toast('Nama kategori belum diubah')
        return
      }
      if (cats.some(function (existing, i) { return i !== idx && existing.toLowerCase() === newName.toLowerCase() })) {
        toast('Kategori tersebut sudah ada', true)
        input.value = catName
        return
      }
      await store.renameCategory(catName, newName)
      if (collection.category === catName) collection.category = newName
      populateFormCategories()
      renderCategoryManageList()
      if (currentPage === 'resep') {
        renderCategoryChips()
        renderCollectionList()
      }
      toast('Kategori "' + catName + '" diubah menjadi "' + newName + '"')
    }

    saveBtn.onclick = commitRename
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault()
        commitRename()
      }
    })

    delBtn.onclick = async function () {
      if (cats.length <= 1) {
        toast('Minimal harus ada satu kategori', true)
        return
      }
      await store.deleteCategory(catName, idx)
      var updated = store.getCategories()
      if (collection.category === catName) collection.category = updated[0] || 'Semua'
      populateFormCategories()
      renderCategoryManageList()
      if (currentPage === 'resep') {
        renderCategoryChips()
        renderCollectionList()
      }
      toast('Kategori "' + catName + '" dihapus')
    }

    box.append(row)
  })
  refreshIcons()
}

on('#category-add-form', 'submit', async function (e) {
  e.preventDefault()
  var input = e.target.elements.catName
  var newName = input.value.trim()
  if (!newName) {
    toast('Masukkan nama kategori baru', true)
    return
  }
  var cats = store.getCategories()
  if (cats.some(function (c) { return c.toLowerCase() === newName.toLowerCase() })) {
    toast('Kategori "' + newName + '" sudah ada', true)
    return
  }
  await store.addCategory(newName)
  input.value = ''
  populateFormCategories()
  renderCategoryManageList()
  if (currentPage === 'resep') renderCategoryChips()
  toast('Kategori "' + newName + '" berhasil ditambahkan')
})

pageRenderers.resep = function () {
  var recipes = store.data.recipes
  var cooks = new Set(recipes.map(function (r) { return r.origin }))
  $('#collection-count').textContent = recipes.length + ' resep tersimpan dari ' + cooks.size + ' juru masak keluarga'

  var origins = ['Semua'].concat(Array.from(cooks))
  if (origins.indexOf(collection.origin) < 0) collection.origin = 'Semua'
  $('#origin-filter').innerHTML = ''
  origins.forEach(function (o) { $('#origin-filter').append(new Option(o, o, false, o === collection.origin)) })

  renderCategoryChips()
  renderCollectionList()
}

function renderCollectionList() {
  var list = $('#collection-list')
  if (!list) return
  list.innerHTML = ''
  if (collection.loading) {
    for (var i = 0; i < 6; i++) list.append(fromTemplate('tpl-skeleton'))
    $('#collection-empty').hidden = true
    return
  }
  var cats = store.getCategories()
  var activeIdx = cats.indexOf(collection.category)
  var showAll = activeIdx <= 0
  var query = collection.search.toLowerCase()
  var results = store.data.recipes.filter(function (r) {
    var matchesText = r.title.toLowerCase().includes(query) || r.ingredients.some(function (i) { return i.name.toLowerCase().includes(query) })
    return matchesText &&
      (showAll || r.cat === collection.category) &&
      (collection.origin === 'Semua' || r.origin === collection.origin) &&
      r.time <= collection.maxTime
  })
  if (collection.sort === 'Favorit') results.sort(function (a, b) { return b.fav - a.fav })
  else if (collection.sort === 'Waktu masak') results.sort(function (a, b) { return a.time - b.time })
  else results.reverse()

  results.forEach(function (r) { list.append(recipeCard(r)) })
  $('#collection-empty').hidden = results.length > 0
  refreshIcons()
}

on('#collection-search', 'input', function (e) { collection.search = e.target.value; renderCollectionList() })
on('#collection-sort', 'change', function (e) { collection.sort = e.target.value; renderCollectionList() })
on('#origin-filter', 'change', function (e) { collection.origin = e.target.value; renderCollectionList() })
on('#max-time', 'input', function (e) {
  collection.maxTime = Number(e.target.value)
  $('#max-time-label').textContent = 'Waktu masak maks: ' + formatTime(collection.maxTime)
  renderCollectionList()
})
on('#filter-toggle', 'click', function () {
  var panel = $('#filters')
  panel.hidden = !panel.hidden
  this.classList.toggle('btn-primary', !panel.hidden)
  this.classList.toggle('btn-secondary', panel.hidden)
})


/* =========================================================
   5.10 HALAMAN DETAIL RESEP
   ========================================================= */
var detail = { recipe: null, servings: 4, checked: new Set() }

pageRenderers.detail = function (id) {
  var r = findRecipe(id)
  if (!r) return go('resep')
  detail = { recipe: r, servings: r.servings, checked: new Set() }

  var backBtn = $('[data-page="detail"] .back')
  if (backBtn) {
    if (previousMainPage === 'favorit') {
      backBtn.dataset.go = 'favorit'
      backBtn.innerHTML = '<i data-lucide="arrow-left"></i>Resep Favorit'
    } else {
      backBtn.dataset.go = 'resep'
      backBtn.innerHTML = '<i data-lucide="arrow-left"></i>Koleksi Resep'
    }
  }

  $('#detail-img').src = r.img.replace('w=800&h=600', 'w=1600&h=900')
  $('#detail-img').alt = r.title
  setupFavButton($('#detail-fav'), r)
  $('#detail-cat').textContent = r.cat
  $('#detail-title').textContent = r.title
  $('#detail-desc').textContent = r.desc
  $('#detail-time').textContent = formatTime(r.time)
  $('#detail-servings').textContent = r.servings + ' orang'
  $('#detail-difficulty').textContent = r.difficulty
  $('#detail-origin').textContent = r.origin
  $('#detail-story').textContent = r.story ? '“' + r.story + '”' : ''
  $('#detail-story-box').hidden = !r.story && !r.origin

  var steps = $('#detail-steps')
  steps.innerHTML = ''
  r.steps.forEach(function (text, i) {
    var li = document.createElement('li')
    li.innerHTML = '<span class="step-num solid"></span><p></p>'
    $('.step-num', li).textContent = i + 1
    $('p', li).textContent = text
    steps.append(li)
  })
  renderIngredients()
}

function renderIngredients() {
  var r = detail.recipe
  if (!r) return
  var factor = detail.servings / r.servings
  $('#servings-value').textContent = detail.servings + ' porsi'
  var list = $('#detail-ingredients')
  list.innerHTML = ''
  r.ingredients.forEach(function (ing, i) {
    var item = fromTemplate('tpl-check-item')
    var button = $('button', item)
    button.classList.toggle('is-checked', detail.checked.has(i))
    $('.check-name', item).textContent = ing.name
    $('.check-sub', item).remove()
    $('.qty', item).textContent = formatQty(ing.qty * factor)
    $('.unit', item).textContent = ing.unit
    button.onclick = function () {
      detail.checked.has(i) ? detail.checked.delete(i) : detail.checked.add(i)
      button.classList.toggle('is-checked')
    }
    list.append(item)
  })
  refreshIcons()
}

on('#servings-minus', 'click', function () { detail.servings = Math.max(1, detail.servings - 1); renderIngredients() })
on('#servings-plus', 'click', function () { detail.servings += 1; renderIngredients() })
on('#detail-edit', 'click', function () { if (detail.recipe) go('form', detail.recipe.id) })

on('#detail-delete', 'click', function () {
  if (!detail.recipe) return
  $('#delete-name').textContent = '“' + detail.recipe.title + '”'
  $('#modal-delete').showModal()
})
on('#delete-confirm', 'click', async function () {
  await store.deleteRecipe(detail.recipe.id)
  $('#modal-delete').close()
  flash('Resep dihapus')
  go('resep')
})

var addMenuChoice = { day: DAYS[0], slot: SLOTS[1] }
function chipGroup(container, options, selected, onPick) {
  container.innerHTML = ''
  options.forEach(function (option) {
    var chip = document.createElement('button')
    chip.type = 'button'
    chip.className = 'chip' + (option === selected ? ' is-active' : '')
    chip.textContent = option
    chip.onclick = function () {
      $all('.chip', container).forEach(function (c) { c.classList.toggle('is-active', c === chip) })
      onPick(option)
    }
    container.append(chip)
  })
}
on('#detail-add-menu', 'click', function () {
  if (!detail.recipe) return
  addMenuChoice = { day: DAYS[0], slot: SLOTS.includes(detail.recipe.cat) ? detail.recipe.cat : SLOTS[1] }
  chipGroup($('#add-menu-days'), DAYS, addMenuChoice.day, function (d) { addMenuChoice.day = d })
  chipGroup($('#add-menu-slots'), SLOTS, addMenuChoice.slot, function (s) { addMenuChoice.slot = s })
  $('#modal-add-menu').showModal()
})
on('#add-menu-save', 'click', async function () {
  var c = addMenuChoice
  await store.setPlanSlot(c.day + '-' + c.slot, detail.recipe.id)
  await store.addActivity(currentUser.name, 'mengisi menu', c.day + ' · ' + c.slot)
  $('#modal-add-menu').close()
  toast(detail.recipe.title + ' ditambahkan ke ' + c.slot + ' hari ' + c.day)
})

var timer = { left: 0, running: false, interval: null }
function paintTimer() {
  var mm = String(Math.floor(timer.left / 60)).padStart(2, '0')
  var ss = String(timer.left % 60).padStart(2, '0')
  $('#timer-display').textContent = mm + ':' + ss
  $('#timer-run').textContent = timer.running ? 'Jeda' : 'Mulai'
}
function stopTimer() { clearInterval(timer.interval); timer.interval = null }
function startTimer() {
  stopTimer()
  timer.interval = setInterval(function () {
    timer.left = Math.max(0, timer.left - 1)
    paintTimer()
    if (timer.left === 0) {
      stopTimer()
      timer.running = false
      paintTimer()
      toast('Waktu memasak selesai!')
    }
  }, 1000)
}
on('#detail-timer', 'click', function () {
  if (!detail.recipe) return
  timer.left = Math.min(detail.recipe.time, 60) * 60
  timer.running = false
  paintTimer()
  $('#modal-timer').showModal()
})
on('#timer-run', 'click', function () {
  if (timer.left === 0) return
  timer.running = !timer.running
  timer.running ? startTimer() : stopTimer()
  paintTimer()
})
on('#timer-minus', 'click', function () { timer.left = Math.max(60, timer.left - 300); paintTimer() })
on('#timer-plus', 'click', function () { timer.left += 300; paintTimer() })
on('#modal-timer', 'close', function () { stopTimer(); timer.running = false })


/* =========================================================
   5.11 FORMULIR TAMBAH / EDIT RESEP
   ========================================================= */
var editingId = null
var formPhoto = ''
var recipeForm = $('#recipe-form')

function populateFormCategories(selectedCat) {
  var select = $('#form-category')
  if (!select) return
  var cats = store.data ? store.getCategories() : CATEGORIES
  var options = cats.length > 1 ? cats.slice(1) : cats.slice()
  select.innerHTML = ''
  options.forEach(function (c) { select.append(new Option(c, c)) })
  if (selectedCat && options.indexOf(selectedCat) < 0) {
    select.append(new Option(selectedCat, selectedCat))
  }
  if (selectedCat) select.value = selectedCat
}

pageRenderers.form = function (id) {
  var r = findRecipe(id)
  editingId = r ? r.id : null
  $('#form-title').textContent = r ? 'Edit Resep' : 'Tambah Resep Baru'
  recipeForm.reset()
  showErrors(recipeForm, {})
  $('#ingredients-card').classList.remove('has-error')
  $('#steps-card').classList.remove('has-error')

  var cats = store.getCategories()
  var defaultCat = cats.indexOf('Makan Malam') >= 0 ? 'Makan Malam' : (cats[1] || cats[0] || 'Makan Malam')
  populateFormCategories(r ? r.cat : defaultCat)

  recipeForm.elements.title.value = r ? r.title : ''
  recipeForm.desc.value = r ? r.desc : ''
  recipeForm.cat.value = r ? r.cat : defaultCat
  recipeForm.difficulty.value = r ? r.difficulty : 'Mudah'
  recipeForm.time.value = r ? r.time : 30
  recipeForm.servings.value = r ? r.servings : 4
  recipeForm.origin.value = r ? r.origin : ''
  recipeForm.story.value = r ? r.story : ''
  setPhoto(r ? r.img : '')

  $('#ingredient-rows').innerHTML = ''
  ;(r ? r.ingredients : [{ name: '', qty: 1, unit: 'gram', cat: 'Bumbu' }]).forEach(addIngredientRow)
  $('#step-rows').innerHTML = ''
  ;(r ? r.steps : ['']).forEach(addStepRow)
}

function leaveForm() { editingId ? go('detail', editingId) : go(previousMainPage === 'favorit' ? 'favorit' : 'resep') }
on('#form-back', 'click', leaveForm)
on('#form-cancel', 'click', leaveForm)

function setPhoto(src) {
  formPhoto = src
  var img = $('#dropzone-img')
  var txt = $('#dropzone-text')
  if (img) { img.src = src; img.hidden = !src }
  if (txt) txt.hidden = !!src
}
function readPhoto(file) {
  if (!file || !file.type.startsWith('image/')) return
  var reader = new FileReader()
  reader.onload = function () { setPhoto(reader.result) }
  reader.readAsDataURL(file)
}
var dropzone = $('#dropzone')
if (dropzone) {
  dropzone.addEventListener('click', function () { $('#photo-input').click() })
  on('#photo-input', 'click', function (e) { e.stopPropagation() })
  on('#photo-input', 'change', function (e) { readPhoto(e.target.files[0]); e.target.value = '' })
  dropzone.addEventListener('dragover', function (e) { e.preventDefault(); dropzone.classList.add('is-dragging') })
  dropzone.addEventListener('dragleave', function () { dropzone.classList.remove('is-dragging') })
  dropzone.addEventListener('drop', function (e) {
    e.preventDefault()
    dropzone.classList.remove('is-dragging')
    readPhoto(e.dataTransfer.files[0])
  })
}

$all('.stepper').forEach(function (stepper) {
  var output = $('output', stepper)
  var step = Number(stepper.dataset.step)
  $all('button', stepper).forEach(function (b) {
    b.addEventListener('click', function () {
      var next = Number(output.value) + step * Number(b.dataset.dir)
      output.value = Math.max(step, next)
    })
  })
})

function addIngredientRow(ing) {
  var row = fromTemplate('tpl-ingredient-row')
  UNITS.forEach(function (u) { $('.ing-unit', row).append(new Option(u, u)) })
  if (UNITS.indexOf(ing.unit) < 0) $('.ing-unit', row).append(new Option(ing.unit, ing.unit))
  $('.ing-name', row).value = ing.name
  $('.ing-qty', row).value = ing.qty
  $('.ing-unit', row).value = ing.unit
  $('.ing-cat', row).value = ing.cat || 'Lainnya'
  $('.remove', row).onclick = function () { row.remove() }
  $('#ingredient-rows').append(row)
  refreshIcons()
}
on('#add-ingredient', 'click', function () { addIngredientRow({ name: '', qty: 1, unit: 'gram', cat: 'Bumbu' }) })

var draggedStep = null
function addStepRow(text) {
  var row = fromTemplate('tpl-step-row')
  $('textarea', row).value = text
  $('.remove', row).onclick = function () { row.remove(); numberSteps() }
  row.addEventListener('dragstart', function () { draggedStep = row; row.classList.add('is-dragging') })
  row.addEventListener('dragend', function () { row.classList.remove('is-dragging'); draggedStep = null; numberSteps() })
  row.addEventListener('dragover', function (e) {
    e.preventDefault()
    if (!draggedStep || draggedStep === row) return
    var rows = $all('.step-row')
    var before = rows.indexOf(draggedStep) > rows.indexOf(row)
    row.parentNode.insertBefore(draggedStep, before ? row : row.nextSibling)
  })
  $('#step-rows').append(row)
  numberSteps()
  refreshIcons()
}
function numberSteps() {
  $all('#step-rows .step-row').forEach(function (row, i) {
    $('.step-num', row).textContent = i + 1
    $('textarea', row).setAttribute('aria-label', 'Langkah ' + (i + 1))
  })
}
on('#add-step', 'click', function () { addStepRow('') })

on('#recipe-form', 'submit', async function (e) {
  e.preventDefault()
  var f = recipeForm
  var ingredients = $all('#ingredient-rows .ingredient-row').map(function (row) {
    return { name: $('.ing-name', row).value.trim(), qty: Number($('.ing-qty', row).value) || 0, unit: $('.ing-unit', row).value, cat: $('.ing-cat', row).value }
  }).filter(function (i) { return i.name })
  var steps = $all('#step-rows textarea').map(function (t) { return t.value.trim() }).filter(Boolean)

  var errors = {}
  if (!f.elements.title.value.trim()) errors.title = 'Judul resep wajib diisi'
  if (!ingredients.length) errors.ingredients = 'Tambahkan minimal satu bahan'
  if (!steps.length) errors.steps = 'Tambahkan minimal satu langkah'
  showErrors(f, errors)
  f.elements.title.classList.toggle('has-error', !!errors.title)
  $('#ingredients-card').classList.toggle('has-error', !!errors.ingredients)
  $('#steps-card').classList.toggle('has-error', !!errors.steps)
  if (Object.keys(errors).length) { toast('Masih ada isian yang perlu dilengkapi', true); return }

  var old = findRecipe(editingId)
  var title = f.elements.title.value.trim()
  /* Perbaikan Bug #1: Menggunakan /\W+/g (bukan /\\W+/g) untuk pembuatan slug ID resep */
  var recipe = {
    id: editingId || title.toLowerCase().replace(/\W+/g, '-') + '-' + Date.now().toString(36),
    title: title,
    desc: f.desc.value.trim(),
    cat: f.cat.value,
    difficulty: f.difficulty.value,
    time: Number(f.time.value),
    servings: Number(f.servings.value),
    origin: f.origin.value.trim() || currentUser.name,
    story: f.story.value.trim(),
    img: formPhoto || 'https://images.unsplash.com/photo-1666239308347-4292ea2ff777?w=800&h=600&fit=crop&auto=format',
    fav: old ? old.fav : false,
    ingredients: ingredients,
    steps: steps,
  }
  try {
    await store.saveRecipe(recipe)
  } catch (err) {
    toast('Gagal menyimpan: foto mungkin terlalu besar', true)
    return
  }
  if (!old) await store.addActivity(currentUser.name, 'menambahkan resep', recipe.title)
  flash('Resep berhasil disimpan!')
  go('detail', recipe.id)
})


/* =========================================================
   5.12 HALAMAN MENU MINGGUAN
   ========================================================= */
var planner = { week: 0, day: todayName(), pickKey: null }

function weekStart(offset) {
  var monday = new Date()
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7) + offset * 7)
  return monday
}

pageRenderers.menu = function () {
  var monday = weekStart(planner.week)
  var sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  var short = function (d) { return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) }
  $('#week-label').textContent = (planner.week === 0 ? 'Minggu ini · ' : '') + short(monday) + ' – ' + short(sunday) + ' ' + sunday.getFullYear()

  var filled = Object.keys(store.data.plan).filter(function (k) { return findRecipe(store.data.plan[k]) }).length
  $('#plan-count').textContent = filled + ' dari 21 waktu makan sudah terisi'
  $('#plan-progress').style.width = (filled / 21) * 100 + '%'

  var grid = $('#week-grid')
  grid.innerHTML = '<div></div>'
  SLOTS.forEach(function (s) { grid.insertAdjacentHTML('beforeend', '<div class="col-label">' + s + '</div>') })
  DAYS.forEach(function (day, i) {
    var date = new Date(monday)
    date.setDate(monday.getDate() + i)
    var label = document.createElement('div')
    label.className = 'day-label'
    label.innerHTML = '<strong></strong><small></small>'
    $('strong', label).textContent = day
    $('small', label).textContent = date.getDate() + ' ' + date.toLocaleDateString('id-ID', { month: 'short' })
    grid.append(label)
    SLOTS.forEach(function (slot) { grid.append(slotCell(day, slot)) })
  })

  var tabs = $('#day-tabs')
  tabs.innerHTML = ''
  DAYS.forEach(function (day) {
    var tab = document.createElement('button')
    tab.type = 'button'
    tab.className = 'day-tab' + (day === planner.day ? ' is-active' : '')
    tab.textContent = day.slice(0, 3)
    tab.onclick = function () { planner.day = day; pageRenderers.menu(); refreshIcons() }
    tabs.append(tab)
  })
  var slots = $('#day-slots')
  slots.innerHTML = ''
  SLOTS.forEach(function (slot) {
    var wrap = document.createElement('div')
    wrap.innerHTML = '<p class="col-label"></p>'
    $('p', wrap).textContent = slot
    wrap.append(slotCell(planner.day, slot))
    slots.append(wrap)
  })
  refreshIcons()
}

function slotCell(day, slot) {
  var key = day + '-' + slot
  var recipe = findRecipe(store.data.plan[key])
  var cell = fromTemplate('tpl-slot')
  if (recipe) {
    $('.slot-empty', cell).remove()
    $('img', cell).src = recipe.img
    $('.slot-title', cell).textContent = recipe.title
    $('.slot-pick', cell).onclick = function () { openPicker(key) }
    $('.slot-clear', cell).onclick = async function () { await store.setPlanSlot(key, null); pageRenderers.menu() }
  } else {
    $('.slot-filled', cell).remove()
    $('.slot-empty', cell).onclick = function () { openPicker(key) }
  }
  return cell
}

on('#week-prev', 'click', function () { planner.week -= 1; pageRenderers.menu() })
on('#week-next', 'click', function () { planner.week += 1; pageRenderers.menu() })
on('#make-shopping-list', 'click', function () {
  flash('Daftar belanja dibuat dari menu minggu ini')
  go('belanja')
})

function openPicker(key) {
  planner.pickKey = key
  $('#pick-title').textContent = 'Pilih resep · ' + key.replace('-', ', ')
  $('#pick-search').value = ''
  renderPickList()
  $('#modal-pick').showModal()
  $('#pick-search').focus()
}
function renderPickList() {
  var query = $('#pick-search').value.toLowerCase()
  var list = $('#pick-list')
  list.innerHTML = ''
  var results = store.data.recipes.filter(function (r) { return r.title.toLowerCase().includes(query) })
  results.forEach(function (r) {
    var item = fromTemplate('tpl-pick-item')
    $('img', item).src = r.img
    $('.pick-name', item).textContent = r.title
    $('.pick-sub', item).textContent = r.cat + ' · ' + r.time + ' mnt'
    $('button', item).onclick = async function () {
      await store.setPlanSlot(planner.pickKey, r.id)
      await store.addActivity(currentUser.name, 'mengisi menu', planner.pickKey.replace('-', ' · '))
      $('#modal-pick').close()
      pageRenderers.menu()
    }
    list.append(item)
  })
  if (!results.length) list.innerHTML = '<li class="muted center pad">Resep tidak ditemukan.</li>'
}
on('#pick-search', 'input', renderPickList)


/* =========================================================
   5.13 HALAMAN DAFTAR BELANJA (MINIMALIS & HEMAT KERTAS)
   ========================================================= */
var shopping = loadShoppingState()

function loadShoppingState() {
  try {
    var raw = sessionStorage.getItem(SHOP_STATE_KEY)
    if (!raw) return { checked: new Set(), extra: [] }
    var parsed = JSON.parse(raw)
    return {
      checked: new Set(Array.isArray(parsed.checked) ? parsed.checked : []),
      extra: Array.isArray(parsed.extra) ? parsed.extra : []
    }
  } catch (e) {
    return { checked: new Set(), extra: [] }
  }
}

function saveShoppingState() {
  try {
    sessionStorage.setItem(SHOP_STATE_KEY, JSON.stringify({
      checked: Array.from(shopping.checked),
      extra: shopping.extra
    }))
  } catch (e) {}
}

function shoppingItems() {
  var merged = new Map()
  Object.values(store.data.plan).forEach(function (id) {
    var recipe = findRecipe(id)
    if (!recipe) return
    recipe.ingredients.forEach(function (ing) {
      var key = ing.name.toLowerCase() + '|' + ing.unit
      var item = merged.get(key)
      if (item) {
        item.qty += ing.qty
        if (item.from.indexOf(recipe.title) < 0) item.from.push(recipe.title)
      } else {
        merged.set(key, { key: key, name: ing.name, qty: ing.qty, unit: ing.unit, cat: ing.cat, from: [recipe.title] })
      }
    })
  })
  return Array.from(merged.values()).concat(shopping.extra)
}

pageRenderers.belanja = function () {
  var items = shoppingItems()
  var box = $('#shop-groups')
  box.innerHTML = ''
  SHOP_GROUPS.forEach(function (group) {
    var list = items.filter(function (i) { return (SHOP_GROUPS.indexOf(i.cat) >= 0 ? i.cat : 'Lainnya') === group })
    if (!list.length) return
    var section = document.createElement('section')
    section.className = 'panel shop-group-card'
    section.innerHTML = '<h2 class="group-title"><span></span><small></small></h2><ul class="check-list shop-compact-list"></ul>'
    $('h2 span', section).textContent = group
    $('h2 small', section).textContent = list.length + ' barang'
    list.forEach(function (i) {
      var row = fromTemplate('tpl-check-item')
      var button = $('button', row)
      button.classList.add('compact')
      button.classList.toggle('is-checked', shopping.checked.has(i.key))
      $('.check-name', row).textContent = i.name
      $('.check-sub', row).textContent = i.from.length ? 'untuk ' + i.from.join(', ') : ''
      if (i.unit) {
        $('.qty', row).textContent = Number(i.qty.toFixed(1))
        $('.unit', row).textContent = i.unit
      } else {
        $('.check-qty', row).remove()
      }
      button.onclick = function () {
        shopping.checked.has(i.key) ? shopping.checked.delete(i.key) : shopping.checked.add(i.key)
        saveShoppingState()
        pageRenderers.belanja()
      }
      $('ul', section).append(row)
    })
    box.append(section)
  })
  $('#shop-empty').hidden = items.length > 0

  var done = items.filter(function (i) { return shopping.checked.has(i.key) }).length
  var cost = items.reduce(function (sum, i) { return sum + (PRICE_PER_ITEM[i.cat] || 5000) }, 0)
  $('#shop-done').textContent = done
  $('#shop-total').textContent = items.length
  $('#shop-progress').style.width = (items.length ? (done / items.length) * 100 : 0) + '%'
  $('#shop-cost').textContent = 'Rp ' + cost.toLocaleString('id-ID')
  refreshIcons()
}

on('#shop-add', 'submit', function (e) {
  e.preventDefault()
  var name = e.target.elements.extra.value.trim()
  if (!name) return
  shopping.extra.push({ key: 'extra-' + Date.now(), name: name, qty: 1, unit: '', cat: 'Tambahan', from: [] })
  saveShoppingState()
  e.target.reset()
  pageRenderers.belanja()
})
on('#shop-share', 'click', function () {
  /* Perbaikan Bug #2: Menggunakan '\n' (bukan '\\n') agar daftar belanja tersalin rapi per baris */
  var text = shoppingItems().map(function (i) { return '- ' + i.name + (i.unit ? ' ' + Number(i.qty.toFixed(1)) + ' ' + i.unit : '') }).join('\n')
  if (navigator.clipboard) navigator.clipboard.writeText('Daftar Belanja\n' + text).catch(function () {})
  toast('Daftar belanja disalin')
})
on('#shop-reset', 'click', function () {
  shopping = { checked: new Set(), extra: [] }
  saveShoppingState()
  pageRenderers.belanja()
})


/* =========================================================
   5.14 HALAMAN KELUARGA
   ========================================================= */
pageRenderers.keluarga = function () {
  var family = store.data.family
  $('#family-name').textContent = family.name
  $('#family-code').textContent = family.code
  $('#invite-code').textContent = family.code
  $('#member-count').textContent = 'Anggota (' + store.data.members.length + ')'

  var list = $('#member-list')
  list.innerHTML = ''
  store.data.members.forEach(function (m) {
    var item = fromTemplate('tpl-member')
    paintAvatar($('.avatar', item), m.name)
    $('.member-name', item).textContent = m.name + (m.email === currentUser.email ? ' (Anda)' : '')
    $('.member-sub', item).textContent = m.email
    $('.role', item).textContent = m.role
    $('.role', item).classList.toggle('is-admin', m.role === 'Admin')
    list.append(item)
  })

  var activity = $('#activity-list')
  activity.innerHTML = ''
  store.data.activity.slice(0, 8).forEach(function (a) {
    var li = document.createElement('li')
    li.innerHTML = '<p><strong class="who"></strong> <span class="what"></span> <strong class="obj"></strong></p><p class="small muted when"></p>'
    $('.who', li).textContent = a.who
    $('.what', li).textContent = a.what
    $('.obj', li).textContent = a.obj
    $('.when', li).textContent = timeAgo(a.at)
    activity.append(li)
  })
  $('#activity-empty').hidden = store.data.activity.length > 0
}

on('#copy-code', 'click', function () {
  if (navigator.clipboard) navigator.clipboard.writeText(store.data.family.code).catch(function () {})
  toast('Kode keluarga disalin')
})
on('#invite-open', 'click', function () { $('#invite-form').reset(); $('#modal-invite').showModal() })
on('#invite-form', 'submit', async function (e) {
  e.preventDefault()
  var name = e.target.elements.name.value.trim()
  var contact = e.target.contact.value.trim()
  if (name && contact) {
    await store.saveMember({ name: name, email: contact, role: 'Anggota' })
    await store.addActivity(currentUser.name, 'mengundang', name)
  }
  $('#modal-invite').close()
  toast('Undangan terkirim')
  pageRenderers.keluarga()
  renderChrome()
})


/* =========================================================
   5.15 HALAMAN PROFIL & PENGATURAN
   ========================================================= */
pageRenderers.profil = function () {
  paintAvatar($('#profile-avatar'), currentUser.name)
  $('#profile-name').textContent = currentUser.name
  $('#profile-email').textContent = currentUser.email + ' · ' + currentUser.role + ' ' + store.data.family.name
  $('#profile-form').elements.name.value = currentUser.name
  $('#profile-form').email.value = currentUser.email
  $('#password-form').reset()
  paintDarkSwitch()
}

on('#profile-form', 'submit', async function (e) {
  e.preventDefault()
  var name = e.target.elements.name.value.trim()
  var email = e.target.elements.email.value.trim()
  /* Perbaikan Bug #3: Menggunakan /\S+@\S+\.\S+/ (bukan /\\S+@\\S+\\.\\S+/) agar profil dapat disimpan */
  if (!name || !/\S+@\S+\.\S+/.test(email)) { toast('Nama dan email harus diisi dengan benar', true); return }
  store.data.members = store.data.members.filter(function (m) { return m.email !== currentUser.email })
  var updated = { name: name, email: email, role: currentUser.role }
  saveUser(updated)
  await store.saveMember(updated)
  renderChrome()
  pageRenderers.profil()
  toast('Profil diperbarui')
})
on('#password-form', 'submit', function (e) {
  e.preventDefault()
  if (e.target.new.value.length < 6) { toast('Password baru minimal 6 karakter', true); return }
  e.target.reset()
  toast('Password berhasil diganti')
})

if (localStorage.getItem('dapur-warisan-dark') === '1') document.documentElement.classList.add('dark')
function paintDarkSwitch() {
  var sw = $('#dark-switch')
  if (!sw) return
  var on = document.documentElement.classList.contains('dark')
  sw.setAttribute('aria-checked', on)
}
on('#dark-switch', 'click', function () {
  var on = document.documentElement.classList.toggle('dark')
  localStorage.setItem('dapur-warisan-dark', on ? '1' : '0')
  paintDarkSwitch()
})


/* =========================================================
   5.16 INISIALISASI APLIKASI SAAT HALAMAN DIMUAT
   ========================================================= */
function initPage() {
  if (currentPage === 'auth') {
    setAuthMode('masuk')
    consumeFlash()
    refreshIcons()
    return
  }

  if (!currentUser) {
    go('auth')
    return
  }

  var navId = (currentPage === 'detail' || currentPage === 'form')
    ? (previousMainPage === 'favorit' ? 'favorit' : 'resep')
    : currentPage

  $all('.nav-link, .bottom-nav button').forEach(function (b) {
    b.classList.toggle('is-active', b.dataset.go === navId)
  })

  renderChrome()
  populateFormCategories()

  var params = new URLSearchParams(location.search)
  var idParam = params.get('id')

  if (pageRenderers[currentPage]) {
    pageRenderers[currentPage](idParam)
  }

  consumeFlash()
  refreshIcons()
}

store.load().then(initPage)