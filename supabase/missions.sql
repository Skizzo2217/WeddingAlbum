-- Esegui questo file una sola volta in Supabase: SQL Editor > New query.
-- La pagina usa un elenco locale per la lettura, quindi non effettua query
-- mentre gli invitati inseriscono il numero della missione.

create table if not exists public.missions (
  id smallint primary key check (id between 1 and 37),
  description text not null
);

insert into public.missions (id, description) values
  (1, 'Fai una foto con qualcuno con pochi capelli.'),
  (2, 'Fai una foto con un uomo che ha i capelli lunghi.'),
  (3, 'Fai una foto con la persona più alta che trovi.'),
  (4, 'Fai una foto con la persona più bassa che trovi.'),
  (5, 'Fai una foto con qualcuno che porta gli occhiali.'),
  (6, 'Fai una foto con qualcuno che ha i capelli ricci.'),
  (7, 'Fai una foto con qualcuno che ha i capelli lisci.'),
  (8, 'Fai una foto con gli occhiali bianchi a forma di cuore.'),
  (9, 'Fai una foto con qualcuno che non conoscevi prima del matrimonio.'),
  (10, 'Fai una foto con una coppia sposata o fidanzata.'),
  (11, 'Fai una foto con una persona che indossa il colore verde.'),
  (12, 'Fai una foto con una persona che indossa il colore blu.'),
  (13, 'Fai una foto con una persona che indossa il colore rosso.'),
  (14, 'Fai una foto con qualcuno più giovane di te.'),
  (15, 'Fai una foto con qualcuno più grande di te.'),
  (16, 'Fai una foto con la persona vestita più elegante.'),
  (17, 'Fai una foto con qualcuno mentre fate una faccia buffa.'),
  (18, 'Fai una foto con qualcuno che non avevi mai incontrato prima.'),
  (19, 'Fai una foto con qualcuno che abbia già bevuto abbastanza.'),
  (20, 'Fai una foto con la persona che secondo te ballerà fino alla fine della serata.'),
  (21, 'Fai una foto con qualcuno che sta mangiando proprio in questo momento.'),
  (22, 'Fai una foto con i genitori dello sposo.'),
  (23, 'Fai una foto con i genitori della sposa.'),
  (24, 'Fai una foto con la mamma dello sposo.'),
  (25, 'Fai una foto con la mamma della sposa.'),
  (26, 'Fai una foto con il papà dello sposo.'),
  (27, 'Fai una foto con il papà della sposa.'),
  (28, 'Fai una foto con i testimoni.'),
  (29, 'Fai una foto con la testimone.'),
  (30, 'Fai una foto con il testimone.'),
  (31, 'Fai una foto con le damigelle.'),
  (32, 'Fai una foto con la sposa.'),
  (33, 'Fai una foto con lo sposo.'),
  (34, 'Fai una foto con gli sposi.'),
  (35, 'Fai una foto con la cugina della sposa.'),
  (36, 'Fai una foto con gli zii degli sposi.'),
  (37, 'Fai una foto con qualcuno: entrambi dovete avere il bicchiere pieno.')
on conflict (id) do update set description = excluded.description;

alter table public.photos add column if not exists mission_id smallint;
alter table public.photos drop constraint if exists photos_mission_id_fkey;
alter table public.photos
  add constraint photos_mission_id_fkey
  foreign key (mission_id) references public.missions(id) on delete set null;

create index if not exists photos_mission_id_idx on public.photos (mission_id);
