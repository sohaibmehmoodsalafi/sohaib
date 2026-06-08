# meetsohaib.com — Code Changes Guide
# Yeh file Claude Code ya developer ko dein

## 1. HERO PHOTO (center column mein)
Find karo:
  <img ... class="hero-photo" ...>

Replace src ke saath:
  src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/s..."
  (full base64 HTML file mein already hai)

object-position: center 15%   ← face upar dikhne ke liye


## 2. ABOUT SECTION PHOTO  
Find karo:
  <img src="data:image/jpeg;base64,..." ... style="...border-radius:20px">

Same base64 use karo.


## 3. LOGO (nav + footer)
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAABMCAYAAAB+..."
(full base64 HTML file mein already hai)


## QUICK DEPLOY STEPS:
1. meetsohaib-improved.html download karo
2. Is file ka content apni current index.html se replace karo
3. Upload karo hosting pe
4. Done!

## FILE SIZE: ~560KB (photos embedded as base64)
## For faster load: photos ko separate files mein rakh kar 
## <img src="/images/sohaib-hero.jpg"> use karo
