# DN AirTecH GmbH – Website 2040

Moderne, futuristische Website für DN AirTecH GmbH mit 3D-Grafiken, Physik-Animationen und einem Design aus dem Jahr 2040.

## Technologie-Stack

- **React 19** + TypeScript
- **Tailwind CSS 4** (Utility-First Styling)
- **Framer Motion** (Animationen)
- **Wouter** (Client-seitiges Routing)
- **Space Grotesk** + **DM Sans** (Typografie)

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten
pnpm dev
```

## GitHub Pages Deployment

### Automatisch (empfohlen)

Der GitHub Actions Workflow (`.github/workflows/deploy.yml`) baut und deployt die Website automatisch bei jedem Push auf den `main`-Branch.

**Einmalige Einrichtung:**

1. Gehen Sie zu Ihrem GitHub Repository → **Settings** → **Pages**
2. Unter **Source** wählen Sie **GitHub Actions**
3. Pushen Sie den Code auf den `main`-Branch
4. Der Workflow startet automatisch und deployt die Website

### Manuell

```bash
# Build erstellen
pnpm build

# Die fertige Website liegt in: dist/public/
# Diese Dateien auf GitHub Pages hochladen
```

### Wichtig: Subdirectory-Deployment

Falls die Website **nicht** im Root-Verzeichnis des Repositories liegt (z.B. `https://username.github.io/repository-name/`), muss in `vite.config.ts` der `base`-Pfad angepasst werden:

```typescript
export default defineConfig({
  base: '/repository-name/', // ← Hier den Repository-Namen eintragen
  // ... rest der Konfiguration
});
```

## Seiten

| Route | Seite |
|-------|-------|
| `/` | Startseite |
| `/sanitaer` | Sanitär & Badinstallation |
| `/waermepumpen` | Wärmepumpen |
| `/klimageraete` | Klimageräte |
| `/ventilation` | Lüftungssysteme |
| `/referenzprojekte` | Referenzprojekte |
| `/kontakt` | Kontakt |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutzerklärung |

## DSGVO-Konformität

- Cookie-Banner mit Zustimmungsverwaltung
- Datenschutzerklärung (Art. 13 DSGVO)
- Kontaktformular mit Datenschutz-Checkbox
- Keine externen Tracking-Scripts ohne Zustimmung

## Farben (Logo-Farben)

| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Primär-Rot | `#D32F2F` | Buttons, Akzente, CTAs |
| Akzent-Blau | `#1565C0` | Sekundäre Elemente |
| Dunkelgrau | `#1A1A2E` | Überschriften, Footer |
| Weiß | `#FFFFFF` | Hintergrund |
