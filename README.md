# Dynamic Email Form

Ushbu loyiha foydalanuvchilarning email manzillarini kiritish va yuborish imkoniyatini beruvchi interaktiv forma yaratishni ko'zda tutadi. Loyihaning asosiy maqsadi minimalistik va zamonaviy dizaynga ega bo'lgan email forma komponentini taqdim etishdir.

## Loyihaning asosiy funksiyalari
- **Kengaytiriluvchi konteyner:** Tugmachani bosganingizda forma ko'rinadi, tugmachani bosmaguningizcha esa yashirin holda qoladi.
- **Foydalanuvchi kiritgan ma'lumotlarni yuborish:** Email manzil kiritilib jo'natish tugmasi bosilgach, forma o'zining avvalgi holatiga qaytadi.

## Texnologiyalar

### HTML
- **Semantik struktura:** Div va form elementlaridan foydalanilgan.
- **Input elementi:** Email kiritish uchun `<input type="email">` elementi ishlatilgan.
- **Tugmalar:** Amalga oshirish va forma ochish uchun `<button>` elementlari qo'llanilgan.

### CSS
- **Google Fonts:** "JetBrains Mono" shriftidan foydalanilgan.
- **CSS Transition:** Konteynerni kengaytirish va qisqartirish animatsiyasi uchun `transition` xususiyati qo'llanilgan.
- **Flexbox:** Formani markazlash va ichki elementlarni joylashtirish uchun `display: flex` ishlatilgan.

### JavaScript
- **DOM Manipulyatsiyasi:** HTML elementlarini tanlash va ularga class qo'shish yoki olib tashlash orqali interaktivlik ta'minlangan.
- **Event Listener:** Tugmalarni bosish holatlarini kuzatish uchun `addEventListener` ishlatilgan.
- **Prevent Default:** Formaning sukut bo'yicha amalga oshiriladigan harakatini to'xtatish uchun `e.preventDefault()` funksiyasi qo'llanilgan.
