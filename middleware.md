middleware ek aisa function hai jo kisis bhi route se pehle chalta hai,
jiska matlab appka route chalne se pehle agar app koi kaam karna chahte
ho to middleware ka upyog kiya jaa skta hai

route pe chalne se pehle print karo chala on console route chalne se pehle
route

srf ek dikkat hai agr humara middleware chalgaya to request jam ho jaati
hai aur route tak nahi pahunch paati

node ke sath ek dikkat hai agr control ek bar bhi kisi middleware par gaya to control khud se agle route/middleware par nahi jayega, use agle par lejane ke liye aapko push karna padega aur ye push kahlayega next() ko chalana

next() ki wajah se control app.use chalane ke bad route pr jayega
