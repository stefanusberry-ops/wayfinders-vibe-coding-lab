# Facilitator notes and prompts

## Before the session

- [ ] Create this repository under an org or account the students can reach
- [ ] Mark it as a **template repository** (Settings → check *Template repository*)
- [ ] Test the full flow yourself: template → codespace → edit → commit → Pages
- [ ] Confirm the school network allows `github.com`, `*.github.dev` and `*.github.io`
- [ ] Confirm student GitHub account availability, or plan for paired/shared accounts
- [ ] Have a ZIP fallback of the starter files ready
- [ ] Print the student checklist and prompt pack
- [ ] Build 2–3 finished example apps to show at the start

editing the facilitator prompt

## Timing guide (90 minutes, session 2)

| Time | Activity |
|---|---|
| 0–10 | Recap and show finished examples |
| 10–20 | Create repo from template, open codespace |
| 20–35 | First version via Copilot |
| 35–55 | Add the interactive feature |
| 55–70 | Test and improve |
| 70–80 | Commit, enable Pages, open live link |
| 80–90 | Demo circle |

## Common issues

| Issue | Fix |
|---|---|
| Preview not loading | Open the **Ports** tab, forward port 8080, or run `python3 -m http.server 8080` |
| Copilot not responding | Check the Copilot icon in the status bar and that the student is signed in |
| Pages shows 404 | Repo must be **Public**, branch **main**, folder **/ (root)**, and give it 1–2 minutes |
| Page loads but no styling | Check `style.css` is in the root and the `<link>` path is correct |
| Codespace slow to start | Pre-create codespaces before the session, or have students pair up |
| Student stuck on ideas | Point them at `examples/` and let them copy one outright |

## Demo prompts to show on screen

```
Explain this project to me like I am a beginner.
```

```
Change the colour theme of my app to warm sunset colours.
```

```
Add a five question quiz with a score counter to the section with id "myFeature".
```

## Cultural framing

Keep the cultural content student led. Offer the themed ideas, never require them.
Suggested wording:

> You do not need to share anything private, sacred or personal. Choose a story,
> theme, word, pattern, journey or game idea that you are comfortable turning
> into a simple digital experience.

Programme facilitators hold the cultural integrity; the Microsoft team provides
the technology scaffolding.

## Success looks like

Every student leaves able to say: *"I built that, and here is the link."*
