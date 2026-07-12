# Anleitung: Website auf GitHub Pages hochladen & Strato-Domain einrichten

Deine Seite ist statisch (nur HTML) – ideal für GitHub Pages. Kein PHP, kein Server nötig.
Das Kontaktformular verschickt über **FormSubmit** direkt an deine E-Mail.

---

## 1. Dateien auf GitHub hochladen

1. Bei **github.com** einloggen.
2. Oben rechts **„+" → „New repository"**.
   - **Repository name:** z. B. `fb-fahrzeugaufbereitung`
   - **Public** auswählen.
   - „Create repository".
3. Auf der neuen Repo-Seite: **„uploading an existing file"** anklicken
   (oder Reiter „Add file" → „Upload files").
4. **Alle Dateien** aus dem ZIP hineinziehen – **wichtig auch die versteckte `.nojekyll`**.
   Dateien: `index.html`, `galerie.html`, `pakete.html`, `lackaufbereitung.html`,
   `smart-repair.html`, `leasingrueckgabe.html`, `impressum.html`, `datenschutz.html`,
   `robots.txt`, `sitemap.xml`, `.nojekyll`
   (Falls `.nojekyll` im Finder/Explorer nicht sichtbar ist: versteckte Dateien einblenden –
   Mac: `Cmd + Shift + .`)
5. Unten **„Commit changes"**.

## 2. GitHub Pages aktivieren

Diese Website wird **automatisch per GitHub Actions** veröffentlicht (die
Datei `.github/workflows/deploy.yml` erledigt das). Deshalb:

1. Im Repo: **Settings → Pages** (linke Leiste).
2. Unter **„Build and deployment"**: Source = **„GitHub Actions"** auswählen.
   (NICHT „Deploy from a branch".)
3. Fertig – ab jetzt läuft bei jedem Upload/Commit automatisch der Workflow
   „Deploy to GitHub Pages" (Reiter **„Actions"** im Repo zeigt den Fortschritt).
4. 1–2 Minuten warten, bis der Workflow grün ist. Unter **Settings → Pages**
   erscheint dann oben die Live-Adresse:
   `https://DEINNAME.github.io/fb-fahrzeugaufbereitung/`
   → Aufrufen und prüfen, ob alles passt.

> Hinweis: `build.js` legt beim Workflow-Lauf automatisch den Ordner `dist`
> mit allen fertigen Website-Dateien an – genau so, wie es dein Workflow
> erwartet. Du musst dafür nichts tun.

## 3. Kontaktformular aktivieren (einmalig)

1. Auf der Live-Seite den Kontaktbereich öffnen und **eine Test-Anfrage absenden**.
2. FormSubmit schickt eine **Bestätigungs-E-Mail** an `info@fb-fahrzeugaufbereitung.de`.
3. In dieser Mail **einmal auf den Bestätigungslink klicken**.
4. Ab jetzt kommen alle Formular-Anfragen automatisch per E-Mail bei dir an.

## 4. Deine Strato-Domain davor schalten

### Weg A – Eigene Domain mit HTTPS (empfohlen)
So läuft die Seite unter **www.fb-fahrzeugaufbereitung.de** statt der github.io-Adresse.
(Im ZIP liegt bereits eine `CNAME`-Datei mit `www.fb-fahrzeugaufbereitung.de` –
deshalb ist die Domain in GitHub meist schon voreingetragen.)

1. **GitHub:** Settings → Pages → Feld **„Custom domain"** → `www.fb-fahrzeugaufbereitung.de`
   → Save (falls noch nicht automatisch gesetzt).
2. **Strato:** Kundenbereich → Domainverwaltung → **DNS-Einstellungen** der Domain.
   Setze folgende Einträge:
   - **CNAME** für `www` → `DEINNAME.github.io` (dein GitHub-Benutzername + `.github.io`)
   - **A-Records** für `@` (die nackte Domain, ohne www) auf diese vier IPs,
     damit `fb-fahrzeugaufbereitung.de` auf die www-Seite weiterleitet:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. Zurück in GitHub (Pages) nach ein paar Minuten/Stunden **„Enforce HTTPS"** aktivieren.
   (DNS-Änderungen können bis zu 24 h dauern.)

### Weg B – Einfache Weiterleitung
Wenn du es ganz simpel willst: bei Strato in der Domainverwaltung eine
**Weiterleitung (Redirect)** auf `https://DEINNAME.github.io/fb-fahrzeugaufbereitung/`
einrichten. (Weniger schön, weil oben die github.io-Adresse erscheinen kann.)

## 5. Erst danach den alten Baukasten kündigen

Wenn die neue Seite live ist und funktioniert, kannst du bei Strato den
**Homepage-Baukasten kündigen** – aber die **Domain NICHT mitkündigen**.

---

## Noch zu erledigen
- Adresse in deinem **Google-Unternehmensprofil** auf Schwabhausen umstellen.
- **Datenschutzerklärung** bei Gelegenheit fachkundig prüfen lassen
  (sie nennt bereits GitHub Pages und FormSubmit).

## Änderungen später
Einfach die betreffende Datei in deinem GitHub-Repo ersetzen (Datei anklicken →
Stift-Symbol/„Upload") und committen – GitHub Pages aktualisiert automatisch.
Oder sag mir Bescheid, ich liefere dir die geänderte Datei fertig.
