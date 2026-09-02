import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Terminal, CheckCircle, Clock, Cpu, Copy, Check, ArrowRight } from 'lucide-react';
import { SIMULATION_WORKFLOWS } from '../data/capabilities';
import { SimulationWorkflow } from '../types';

export const SimulationPlayground: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<SimulationWorkflow>(SIMULATION_WORKFLOWS[0]);
  const [inputText, setInputText] = useState(selectedWorkflow.defaultInput);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStageIdx, setCurrentStageIdx] = useState(-1);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [copied, setCopied] = useState(false);

  const logsEndRef = useRef<HTMLDivElement>(null);
  const timerIntervalRef = useRef<number | null>(null);

  // Switch workflow handler
  const handleSelectWorkflow = (wf: SimulationWorkflow) => {
    if (isRunning) return;
    setSelectedWorkflow(wf);
    setInputText(wf.defaultInput);
    setCurrentStageIdx(-1);
    setVisibleLogs([]);
    setIsCompleted(false);
    setElapsedMs(0);
  };

  // Run autonomous pipeline simulation
  const handleRunPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsCompleted(false);
    setCurrentStageIdx(0);
    setVisibleLogs([]);
    setElapsedMs(0);

    const startTime = performance.now();
    timerIntervalRef.current = window.setInterval(() => {
      setElapsedMs(Math.round(performance.now() - startTime));
    }, 30);

    // Staged progression through workflow stages & logs
    let delayAccumulator = 0;

    selectedWorkflow.stages.forEach((stage, idx) => {
      delayAccumulator += stage.durationMs;

      setTimeout(() => {
        setCurrentStageIdx(idx);
        // Push corresponding log message
        if (selectedWorkflow.sampleLogs[idx]) {
          setVisibleLogs((prev) => [...prev, selectedWorkflow.sampleLogs[idx]]);
        }
      }, delayAccumulator);
    });

    // Complete simulation
    setTimeout(() => {
      // Add final confirmation log
      if (selectedWorkflow.sampleLogs[selectedWorkflow.stages.length]) {
        setVisibleLogs((prev) => [...prev, selectedWorkflow.sampleLogs[selectedWorkflow.stages.length]]);
      }
      setIsCompleted(true);
      setIsRunning(false);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }, delayAccumulator + 400);
  };

  const handleReset = () => {
    if (isRunning) return;
    setCurrentStageIdx(-1);
    setVisibleLogs([]);
    setIsCompleted(false);
    setElapsedMs(0);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedWorkflow.outputData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleLogs]);

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  return (
    <section id="live-simulation" className="relative py-24 border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 font-mono-telemetry">
              ETKİLEŞİMLİ ÇALIŞMA ORTAMI // CANLI TELEMETRİ TESTİ
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Otonom İşlem Hattı Simülatörü
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-2 font-light leading-relaxed">
            Gerçek zamanlı metin ayrıştırma, vektör akıl yürütme, güvenlik denetimi ve otomatik ERP/CRM dağıtımını canlı olarak test etmek için aşağıdaki senaryolardan birini seçin.
          </p>
        </div>

        {/* Workflow Switcher Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SIMULATION_WORKFLOWS.map((wf, idx) => (
            <button
              key={wf.id}
              id={`sim-wf-${wf.id}`}
              onClick={() => handleSelectWorkflow(wf)}
              disabled={isRunning}
              className={`p-4 border text-left transition-all cursor-pointer ${
                selectedWorkflow.id === wf.id
                  ? 'bg-white text-black border-white'
                  : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.04]'
              } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className={`text-[9px] font-mono-telemetry uppercase tracking-widest mb-1 ${
                selectedWorkflow.id === wf.id ? 'text-black/60' : 'text-white/40'
              }`}>
                0{idx + 1} // İşlem Düğümü
              </div>
              <div className="text-xs font-bold uppercase tracking-tight truncate">
                {wf.name}
              </div>
            </button>
          ))}
        </div>

        {/* Simulation Execution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Input Payload & Execution Trigger */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 border border-white/10 bg-white/[0.02] space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[10px] font-mono-telemetry uppercase tracking-[0.2em] text-white/80 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-white/50" />
                  <span>{selectedWorkflow.inputLabel}</span>
                </label>
                <span className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest border border-white/10 px-2 py-0.5">
                  Düzenlenebilir Veri
                </span>
              </div>

              <textarea
                id="sim-input-textarea"
                rows={7}
                disabled={isRunning}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full p-3.5 bg-black/70 border border-white/10 text-xs font-mono-telemetry text-white/90 focus:outline-none focus:border-white/40 transition-colors leading-relaxed resize-none"
              />
              <p className="text-[11px] text-white/50 mt-2 font-light leading-relaxed">
                {selectedWorkflow.description}
              </p>
            </div>

            {/* Execution Controls */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  id="run-simulation-btn"
                  onClick={handleRunPipeline}
                  disabled={isRunning}
                  className={`px-5 py-3 text-[10px] font-mono-telemetry font-bold uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer ${
                    isRunning
                      ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-white/90 active:scale-95'
                  }`}
                >
                  {isRunning ? (
                    <>
                      <Cpu className="w-3.5 h-3.5 animate-spin text-neutral-500" />
                      <span>İşleniyor...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-black text-black" />
                      <span>İşlem Hattını Çalıştır</span>
                    </>
                  )}
                </button>

                <button
                  id="reset-simulation-btn"
                  onClick={handleReset}
                  disabled={isRunning || currentStageIdx === -1}
                  className="p-3 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  title="İşlem hattını sıfırla"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-right">
                <div className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest">Çalışma Süresi</div>
                <div className="text-xs font-mono-telemetry font-bold text-white">
                  {elapsedMs} ms
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Pipeline Stages & Live Telemetry Stream */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Visual Pipeline Stages */}
            <div className="p-6 sm:p-7 border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <div className="text-[10px] font-mono-telemetry uppercase tracking-[0.2em] text-white/70 font-bold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-white/40" />
                  <span>İşlem Hattı Aşamaları</span>
                </div>
                <span className="text-[10px] font-mono-telemetry text-white/40 uppercase tracking-widest">
                  {currentStageIdx >= 0 ? `Aşama 0${currentStageIdx + 1} / 0${selectedWorkflow.stages.length}` : 'Durum: Beklemede'}
                </span>
              </div>

              <div className="space-y-2">
                {selectedWorkflow.stages.map((stage, idx) => {
                  const isPast = idx < currentStageIdx;
                  const isCurrent = idx === currentStageIdx;

                  return (
                    <div
                      key={idx}
                      className={`p-3 border transition-all duration-200 flex items-center justify-between ${
                        isCurrent
                          ? 'bg-white text-black border-white'
                          : isPast
                          ? 'bg-white/[0.04] border-white/20 text-white'
                          : 'bg-black/30 border-white/5 text-white/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 flex items-center justify-center text-[10px] font-mono-telemetry font-bold ${
                            isCurrent
                              ? 'bg-black text-white'
                              : isPast
                              ? 'border border-emerald-400 text-emerald-400'
                              : 'border border-white/20 text-white/30'
                          }`}
                        >
                          {isPast ? <Check className="w-3 h-3" /> : idx + 1}
                        </div>

                        <div>
                          <div className={`text-xs uppercase font-bold tracking-tight ${isCurrent ? 'text-black' : 'text-white'}`}>
                            {stage.name}
                          </div>
                          <div className={`text-[10px] font-light ${isCurrent ? 'text-black/70' : 'text-white/40'}`}>
                            {stage.detail}
                          </div>
                        </div>
                      </div>

                      <div className={`text-[10px] font-mono-telemetry shrink-0 ml-2 ${isCurrent ? 'text-black/60' : 'text-white/40'}`}>
                        ~{stage.durationMs}ms
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Terminal Log Stream & Output Preview */}
            <div className="p-6 sm:p-7 border border-white/10 bg-black/60 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2 text-[10px] font-mono-telemetry uppercase tracking-[0.2em] text-white/50">
                  <Terminal className="w-3.5 h-3.5 text-white/40" />
                  <span>Gerçek Zamanlı Sistem Günlükleri</span>
                </div>
                <div className="flex items-center gap-2">
                  {isCompleted && (
                    <button
                      onClick={handleCopyOutput}
                      className="flex items-center gap-1 text-[9px] font-mono-telemetry uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer border border-white/10 px-2 py-0.5"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Kopyalandı' : 'JSON Kopyala'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Log Stream Terminal Window */}
              <div className="h-44 overflow-y-auto font-mono-telemetry text-xs space-y-1 text-white/80 p-3 bg-black/90 border border-white/10 mb-4">
                {visibleLogs.length === 0 ? (
                  <div className="text-white/30 italic py-4 text-center text-[11px]">
                    Tetikleme bekleniyor. Canlı telemetri akışını başlatmak için "İşlem Hattını Çalıştır" butonuna tıklayın...
                  </div>
                ) : (
                  visibleLogs.map((log, i) => (
                    <div key={i} className="animate-in fade-in duration-150">
                      <span className="text-emerald-400 font-semibold">{log.slice(0, 11)}</span>
                      <span className="text-white/70">{log.slice(11)}</span>
                    </div>
                  ))
                )}
                <div ref={logsEndRef} />
              </div>

              {/* Final Output Envelope (when completed) */}
              {isCompleted && (
                <div className="mt-auto p-3.5 border border-white/20 bg-white/[0.03] animate-in fade-in duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono-telemetry font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>İşlem Hattı Başarıyla Tamamlandı</span>
                    </span>
                    <span className="text-[9px] font-mono-telemetry text-white/40 uppercase tracking-widest">
                      %100 Deterministik Kapsam
                    </span>
                  </div>
                  <pre className="text-[11px] font-mono-telemetry text-white/70 overflow-x-auto max-h-32 p-2 bg-black/60 border border-white/10">
                    {JSON.stringify(selectedWorkflow.outputData, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
