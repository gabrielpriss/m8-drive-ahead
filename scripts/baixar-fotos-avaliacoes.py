"""Baixa a foto de perfil do Google de cada avaliação listada em
src/data/avaliacoes.json e salva no próprio site, em public/avaliacoes/<id>.webp.

As fotos ficam no repositório para o site não depender do Google para carregar.
Roda no GitHub Actions (workflow "Fotos das avaliações") sempre que o JSON muda.
"""
import io
import json
import pathlib
import sys
import urllib.request

from PIL import Image

RAIZ = pathlib.Path(__file__).resolve().parent.parent
DADOS = RAIZ / "src" / "data" / "avaliacoes.json"
DESTINO = RAIZ / "public" / "avaliacoes"
TAMANHO = 96  # exibida a 40 px, cobre telas 2x com folga

DESTINO.mkdir(parents=True, exist_ok=True)
avaliacoes = json.loads(DADOS.read_text(encoding="utf-8"))["avaliacoes"]
falhas = []

for a in avaliacoes:
    url = a["foto_google"].split("=")[0] + f"=s{TAMANHO * 2}-c"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            bruto = r.read()
        im = Image.open(io.BytesIO(bruto)).convert("RGB").resize((TAMANHO, TAMANHO), Image.LANCZOS)
        saida = DESTINO / f"{a['id']}.webp"
        im.save(saida, "WEBP", quality=82, method=6)
        print(f"ok  {a['id']}  {saida.stat().st_size} bytes")
    except Exception as e:  # noqa: BLE001
        falhas.append(a["id"])
        print(f"ERRO {a['id']}: {e}")

ids = {a["id"] for a in avaliacoes}
for f in DESTINO.glob("*.webp"):
    if f.stem not in ids:
        f.unlink()
        print(f"removida {f.name} (avaliação saiu do JSON)")

if falhas:
    sys.exit(f"Falharam: {', '.join(falhas)}")
