import { useState, type ChangeEvent, type FormEvent } from "react";
import { whatsappLink } from "@/lib/whatsapp";

function maskCNPJ(v: string) {
  return v
    .replace(/\D/g, "")
    .slice(0, 14)
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10) {
    return d.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  }
  return d.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}

export function SignupForm() {
  const [form, setForm] = useState({
    nome: "",
    cnpj: "",
    cidade: "",
    whatsapp: "",
    tipo: "",
    volume: "",
  });
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      let v = e.target.value;
      if (field === "cnpj") v = maskCNPJ(v);
      if (field === "whatsapp") v = maskPhone(v);
      setForm({ ...form, [field]: v });
    };
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    // Direciona para o vendedor com a mensagem de cadastro
    window.open(whatsappLink("form"), "_blank", "noopener,noreferrer");
  }

  const inputCls =
    "w-full bg-black px-4 py-3 text-white placeholder:text-white/40 border-chrome-dark clip-chamfer-sm focus:outline-none focus:ring-2 focus:ring-[var(--m8-red)]/60";
  const labelCls =
    "mb-2 block font-display text-[11px] uppercase tracking-[0.22em] text-white/70";

  return (
    <section id="cadastro" className="relative bg-[var(--graphite)] py-16 lg:py-24">
      <div className="absolute inset-0 brushed-metal opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block bg-[var(--m8-red)] px-3 py-1 font-display text-[11px] uppercase tracking-[0.25em] text-white clip-chamfer-sm">
            Cadastro de revendedor
          </span>
          <h2 className="mt-5 font-display text-chrome text-3xl uppercase italic leading-[0.95] sm:text-5xl">
            Receba a tabela exclusiva de atacado
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Preencha e nosso vendedor entra em contato em até 30 minutos no horário comercial.
          </p>
        </div>
        <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelCls}>Nome completo</label>
            <input required value={form.nome} onChange={update("nome")} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>CNPJ</label>
            <input
              required
              value={form.cnpj}
              onChange={update("cnpj")}
              placeholder="00.000.000/0000-00"
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Cidade</label>
            <input required value={form.cidade} onChange={update("cidade")} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>WhatsApp</label>
            <input
              required
              value={form.whatsapp}
              onChange={update("whatsapp")}
              placeholder="(00) 00000-0000"
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Tipo de negócio</label>
            <select required value={form.tipo} onChange={update("tipo")} className={inputCls}>
              <option value="">Selecione</option>
              <option>Loja de pneus</option>
              <option>Borracharia</option>
              <option>Auto Center</option>
              <option>Mecânica</option>
              <option>Frotista</option>
              <option>Outro</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Volume mensal estimado</label>
            <select required value={form.volume} onChange={update("volume")} className={inputCls}>
              <option value="">Selecione</option>
              <option>8-20 pneus</option>
              <option>21-50 pneus</option>
              <option>51-100 pneus</option>
              <option>100+ pneus</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-[var(--m8-red)] px-6 py-4 font-display text-base uppercase tracking-[0.2em] italic text-white clip-chamfer btn-shine hard-shadow transition-transform hover:-translate-y-0.5"
            >
              {sent ? "Cadastro enviado — abrindo WhatsApp" : "Quero receber a tabela"}
            </button>
            <p className="mt-3 text-center text-xs text-white/55">
              Seus dados são usados apenas para contato comercial. Não compartilhamos com terceiros.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}