# Zmijica - JavaScript Snake igra

Klasična igrica Zmijica implementirana kao web aplikacija koristeći **HTML**, **CSS**, **JavaScript** i **jQuery**. Igra se pokreće direktno u pregledaču bez potrebe za serverom.

---

# Opis

Igrač kontroliše zmijicu koja se kreće po tabli 10×10. Cilj je pojesti što više hrane i ne udariti u zid ili sopstveno telo. Zmijica raste sa svakim pojedenim obrokom, a svakih 10 sekundi se pojavljuje bonus hrana koja nestaje nakon 5 sekundi.

---

# Kontrole

| Taster | Akcija |
|---|---|
| ↑ | Kretanje gore |
| ↓ | Kretanje dole |
| → | Kretanje desno |
| ← | Kretanje levo |

> Igra počinje na prvom pritisku tastera.

---

# Hrana

| Hrana | Boja | Opis |
|---|---|---|
| Obična hrana | 🔴 Crvena | Uvek prisutna na tabli, zmijica raste kada je pojede |
| Bonus hrana | 🟣 Ljubičasta | Pojavljuje se svakih 10 sekundi, nestaje nakon 5 sekundi |

---

# Kraj igre

Igra se završava kada zmijica:
- Udari u **zid** (ivicu table)
- Udari u **sopstveno telo**

---

# Struktura projekta

```
zmijica/
├── zmijica-igra.html        # Glavna stranica sa igrom
├── zmijica-rezultati.html   # Stranica sa rezultatima
├── zmijica-uputstvo.html    # Stranica sa uputstvom
├── skripta.js               # Sva logika igre (jQuery)
└── zmijica-dodatno/
    ├── bootstrap-5.3.0-alpha3-dist/   # Bootstrap CSS/JS
    └── jquery-3.7.0.min.js            # jQuery biblioteka
```

---

# Tehnologije

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **jQuery 3.7.0**
- **Bootstrap 5.3.0**

---

# Pokretanje

Projekat ne zahteva server - dovoljno je otvoriti `zmijica-igra.html` u pregledaču:

1. Preuzmi ili kloniraj repozitorijum
2. Otvori fajl `zmijica-igra.html` u pregledaču (Chrome, Firefox, Edge...)
3. Pritisni strelicu da počneš igru
